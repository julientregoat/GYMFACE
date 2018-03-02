import React from "react"
import CalendarList from "./CalendarList"

class CalendarContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1> Today's Schedule </h1>
        <CalendarList/>
      </React.Fragment>
    );
  }
}

export default CalendarContainer;
