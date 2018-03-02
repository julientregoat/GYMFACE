import React, { Component } from 'react';

import Dashboard from './Dashboard'
import Header from './Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
