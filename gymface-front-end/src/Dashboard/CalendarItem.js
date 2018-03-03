import React from "react"
import { Grid } from 'semantic-ui-react'

class CalendarItem extends React.Component {
  render() {
    return (
      <Grid.Row className="calendarItem">
        <span>Class Name</span>
        <span>Instructor's Name</span>
        <span>Start Time</span>
        <span>End Time</span>
        <button>Join Class</button> 
      </Grid.Row>
    );
  }
}

export default CalendarItem;
