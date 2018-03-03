import React, { Component } from 'react';

import UserInfo from './UserInfo'

import { Grid } from 'semantic-ui-react'

class Account extends Component {

  state = {
    user: {}
  }

  componentDidMount(){
    fetch('http://localhost:3001/users/1')
    .then(res => res.json())
    .then(user => this.setState({user: user}))
  }

  render() {
    return (
      <Grid centered columns={2}>
        <UserInfo user={this.state.user}/>
      </Grid>
    );
  }

}

export default Account;
