import React, { Component } from 'react';

import UserInfo from './UserInfo'

import { Grid } from 'semantic-ui-react'
import Webcam from 'react-webcam'

class Account extends Component {

  state = {
    user: {},
    capturedImage: "",
    edit:false
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

  handleEditInfo = () => {
    this.setState({edit:!this.state.edit})
  }


  handleInputChange= (event) => {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });

}
  }
  updateInfo = (user) => {
    fetch(`http://localhost:3001/user_klasses/1`,
    { method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {user_id:user.id,
        user_name:user.name}
      )
    }
    ).then(response => response.json())
     .then(data=> {
       console.log(data)
       this.handleEditInfo()
     })




  }

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Row><UserInfo user={this.state.user} edit={this.state.edit} updateInfo={this.updateInfo} handleInputChange={this.handleInputChange}/>
        <button onClick={this.capture}>Capture photo</button></Grid.Row>
        <button onClick={this.handleEditInfo}>Edit Profile</button></Grid.Row>

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
