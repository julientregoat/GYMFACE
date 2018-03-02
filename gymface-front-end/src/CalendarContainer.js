import React from "react"
import CalendarList from "./CalendarList"

import { Grid } from 'semantic-ui-react'

class CalendarContainer extends React.Component {
  render() {
    return (
      <Grid>
        <h1>CalendarContainer</h1>
        <CalendarList/>
      </Grid>
    );
  }
}

export default CalendarContainer;
