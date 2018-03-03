import React, { Component } from 'react';

import UserInfo from './UserInfo'

import { Grid } from 'semantic-ui-react'
import Webcam from 'react-webcam'

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
    this.setState({capturedImage: imageSrc})
  };

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Row><UserInfo user={this.state.user}/>
        <button onClick={this.capture}>Capture photo</button></Grid.Row>
        <Grid.Row><Webcam 
        audio={false} 
        ref={this.setRef}
        screenshotFormat="image/jpeg"/>
        <img src={this.state.capturedImage}/></Grid.Row>
      </Grid>
    );
  }

}

export default Account;
