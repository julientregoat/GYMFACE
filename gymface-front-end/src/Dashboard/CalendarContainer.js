import React from "react"
import CalendarItem from "./CalendarItem"

import { Grid } from 'semantic-ui-react'

class CalendarContainer extends React.Component {
  state = {
    classes: []
  }
  
  componentDidMount(){
    this.fetchUserCalendar()
  }
  
  fetchUserCalendar(){
    fetch('http://localhost:3001/users/1')
    .then(res => res.json()).then(user => this.setState({classes: user.klasses}))
  }
  
  // map this.props.calendar items using CalendarItem
  render() {
    return (
      <Grid centered columns={5}>
        <Grid.Row><h1>Today's Schedule</h1></Grid.Row>
        {this.state.classes.map(clas => <CalendarItem key={clas.id} classInfo={clas} joined={true}/>)}
      </Grid>
    );
  }
}

export default CalendarContainer;
