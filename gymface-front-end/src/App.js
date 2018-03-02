import React, { Component } from 'react';

import Dashboard from './Dashboard'
import Header from './Header'

import './App.css';
import { Grid, Divider } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Divider />
        <Dashboard />
      </div>
    );
  }
}

export default App;
