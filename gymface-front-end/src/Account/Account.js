import React, { Component } from 'react';

import UserInfo from './UserInfo'

import { Grid } from 'semantic-ui-react'
import Webcam from 'react-webcam'

import { AWS_ID, AWS_KEY } from '../env.js'

var AWS = require('aws-sdk');
var myConfig = new AWS.Config({
  accessKeyId: AWS_ID, secretAccessKey: AWS_KEY, region: 'us-east-2'
})
var s3 = new AWS.S3(myConfig);
var rekognition = new AWS.Rekognition(myConfig);


class Account extends Component {

  state = {
    user: {},
    capturedImage: ""
  }

  componentDidMount(){
    fetch('http://localhost:3001/users/1')
    .then(res => res.json())
    .then(user => this.setState({user: user}))
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({capturedImage: imageSrc}, () => this.generateBuffer())
  };

  generateBuffer = () => {
    var rawdata = this.state.capturedImage;
    var matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var type = matches[1]; // e.g. 'image/jpeg'
    var buffer = new Buffer(matches[2], 'base64');
    // ^^ img content converted to binary buffer stream
    console.log(AWS_ID)
    var params = {
      SourceImage: {
       S3Object: {
        Bucket: "gymface-faces",
        Name: "user-1.jpg"
       }
      },
      TargetImage: {
        Bytes: buffer
      }
     }

     rekognition.compareFaces(params, function(err, data) {
       if (err) {
         console.log("error", err, err.stack)
       } else {
         console.log("not error", data)
       }
     })
  }

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Row><UserInfo user={this.state.user}/>
        <button onClick={this.capture}>Capture photo</button></Grid.Row>
        <Grid.Row><Webcam
        audio={false}
        ref={this.setRef}
        screenshotFormat="image/jpeg"/>
        <img src={this.state.capturedImage} alt="snapshot results"/></Grid.Row>
      </Grid>
    );
  }

}

export default Account;
