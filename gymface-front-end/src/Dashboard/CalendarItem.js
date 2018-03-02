import React from "react"
import { Grid } from 'semantic-ui-react'

class CalendarItem extends React.Component {
  render() {
    return (
      <Grid.Row className="calendarItem">
        CalendarItem
        Class Name
        Instructor's Name
        Time
        <button>Join Class</button> 
      </Grid.Row>
    );
  }
}

export default CalendarItem;
