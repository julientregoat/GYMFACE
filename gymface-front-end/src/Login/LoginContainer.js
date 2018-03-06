import React, { Component } from 'react';

import LoginForm from './LoginForm'

import { Grid } from 'semantic-ui-react';
import WebcamContainer from '../WebcamContainer';

import { AWS_ID, AWS_KEY } from '../env.js'

var AWS = require('aws-sdk');
var myConfig = new AWS.Config({
  accessKeyId: AWS_ID, secretAccessKey: AWS_KEY, region: 'us-east-2'
})
var s3 = new AWS.S3(myConfig);
var rekognition = new AWS.Rekognition(myConfig);

class LoginContainer extends Component {

   matchFace = (buffer) => {
     let params = {
       CollectionId: "gymface",
       FaceMatchThreshold: 95,
       Image: { Bytes: buffer },
       MaxFaces: 5
     };

     rekognition.searchFacesByImage(params, function(err, data) {
        if (err) {
          alert("Make sure your face is in the photo!")
        } else if (data["FaceMatches"].length === 0){
          alert("No user found. Try again.")
        } else {
          console.log(data)
          fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({face_info: data})
          }).then(res => res.json()).then(json => alert(`Welcome, ${json.name}`))
        }
      })
   }

   handleLogin = (event) => {
     event.preventDefault()
     let username = event.target.username.value
     let password = event.target.password.value

     fetch('http://localhost:3001/login', {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({user: {username: username, password: password}})
     }).then(res => res.json()).then(user => {
       if (user.error){
         alert(user.error)
       } else {
         alert(`Welcome, ${user.name}`)
       }
     })
   }

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Row>
          <WebcamContainer webcamCallback={this.matchFace}/>
        </Grid.Row>
        <Grid.Row>
          <LoginForm loginCallback={this.handleLogin}/>
        </Grid.Row>
      </Grid>
    );
  }

}

export default LoginContainer;
