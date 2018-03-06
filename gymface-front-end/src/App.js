import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Header from './Header'
import Dashboard from './Dashboard/Dashboard'
import Classes from './Classes/Classes'
import Account from './Account/Account'
import LoginContainer from './Login/LoginContainer'
import SignUpContainer from './SignUp/SignUpContainer'

import './App.css';
import { Grid } from 'semantic-ui-react'

class App extends Component {

  state = {
    currentUser: null
  }

  // perhaps should manage class lists in state up here? this would allow us to
  // fetch the current day's classes once the user loads the app and save time.
  // make higher order component for auth

  setUser = (user) => {
    this.setState({currentUser: user})
  }

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
                  <Route exact path="/login" render={()=> <LoginContainer setUser={this.setUser}/>} />
                  <Route exact path="/signup" component={SignUpContainer} />
                  {this.state.currentUser ?
                    <React.Fragment>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/classes" component={Classes} />
                    <Route exact path="/account" component={Account} />
                    </React.Fragment>
                    : <Redirect to="/login" />}
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
