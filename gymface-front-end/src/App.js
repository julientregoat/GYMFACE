import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from './Dashboard/Dashboard'
import Classes from './Classes/Classes'
import Header from './Header'

import './App.css';
import { Grid } from 'semantic-ui-react'

class App extends Component {
  
  // should define a check logged in callback here for router
  
  render() {
    return (
      <Grid centered id="app">
        <Router>
          <React.Fragment>
          
            <Grid.Row>
              <Header />
            </Grid.Row>
            
            <Grid.Row>
              <div className="page">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/classes" component={Classes} />
                    <Redirect to="/" />
                </Switch>
              </div>
            </Grid.Row>
            
          </React.Fragment>
        </Router>
        
      </Grid>
    );
  }
}

export default App;
