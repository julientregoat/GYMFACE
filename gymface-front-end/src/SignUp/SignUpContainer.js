import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import SignUpForm from './SignUpForm'
import WebcamContainer from '../WebcamContainer'

class SignUpContainer extends Component {

  signUp = () => {
  }

  indexFace = (buffer) => {
    console.log(buffer)
    console.log("hi!")
    var params = {
      CollectionId: "gymface",
      Image: {
       Bytes: buffer
      }
     };
  }

  render() {
    return (
      <div>
        <WebcamContainer webcamCallback={this.indexFace}/>
      </div>
    );
  }

}

export default SignUpContainer;
