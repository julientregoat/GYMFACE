import React from "react"
import { Grid } from 'semantic-ui-react'

const CalendarItem = (props) => (
  <Grid.Row className="calendarItem" centered>
    <span>{props.classInfo.name}</span>
    <span>{props.classInfo.instructor}</span>
    <span>{props.classInfo.start_time}</span>
    <span>{props.classInfo.end_time}</span>
    <button>Join Class</button> 
  </Grid.Row>
);

export default CalendarItem;