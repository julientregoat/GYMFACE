import React, { Component } from 'react';

import Dashboard from './Dashboard/Dashboard'
import Header from './Header'

import './App.css';
import { Grid } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Grid centered id="app">
        <Grid.Row streched><Header /></Grid.Row>
        <Grid.Row><Dashboard /></Grid.Row>
      </Grid>
    );
  }
}

export default App;
