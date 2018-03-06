import React, { Component } from 'react';

import LoginForm from './LoginForm'

import { Grid } from 'semantic-ui-react';
import Webcam from 'react-webcam'

import { AWS_ID, AWS_KEY } from '../env.js'

var AWS = require('aws-sdk');
var myConfig = new AWS.Config({
  accessKeyId: AWS_ID, secretAccessKey: AWS_KEY, region: 'us-east-2'
})
var s3 = new AWS.S3(myConfig);
var rekognition = new AWS.Rekognition(myConfig);

class LoginContainer extends Component {

  state = {
    capturedImage: ""
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
    console.log(rawdata, buffer)
    // var params = {
    //   SourceImage: {
    //    S3Object: {
    //     Bucket: "gymface-faces",
    //     Name: "user-1.jpg"
    //    }
    //   },
    //   TargetImage: {
    //     Bytes: buffer
    //   }
    //  }
    var params = {
      CollectionId: "gymface",
      FaceMatchThreshold: 95,
      Image: {
        Bytes: buffer
      },
      MaxFaces: 5
    };
    rekognition.searchFacesByImage(params, function(err, data) {
       if (err) {
         alert("Make sure your face is in the photo!")
       } else {
         console.log("not error", data)
       }
     })
    // fetch('http://localhost:3001/login', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(buffer)
    // })
   }

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Row>
          <Webcam audio={false} ref={this.setRef} screenshotFormat="image/jpeg"/>
          <img src={this.state.capturedImage} alt="snapshot results"/>
        </Grid.Row>
        <button onClick={this.capture}>Capture Login Photo</button>
        <Grid.Row>
          <LoginForm />
        </Grid.Row>
      </Grid>
    );
  }

}

export default LoginContainer;
