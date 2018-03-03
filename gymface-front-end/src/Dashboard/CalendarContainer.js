import React from "react"
import CalendarItem from "./CalendarItem"

import { Grid } from 'semantic-ui-react'

class CalendarContainer extends React.Component {
  // should be fetching current users classes
  
  componentDidMount(){
    this.fetchUserCalendar()
  }
  
  fetchUserCalendar(){
    console.log("Hi")
  }
  render() {
    return (
      <Grid centered columns={5}>
        <Grid.Row><h1>Today's Schedule</h1></Grid.Row>
        <CalendarItem/>
      </Grid>
    );
  }
}

export default CalendarContainer;
