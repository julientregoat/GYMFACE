import React from "react"
import CalendarList from "./CalendarList"

import { Grid } from 'semantic-ui-react'

class CalendarContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1> Calendar Container</h1>
        <CalendarList/>
      </React.Fragment>
    );
  }
}

export default CalendarContainer;
