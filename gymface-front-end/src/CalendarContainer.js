import React from "react"
import CalendarList from "./CalendarList"

class CalendarContainer extends React.Component {
  render() {
    return (
      <div className="border">
        <h1>CalendarContainer</h1>
        <CalendarList/>
      </div>
    );
  }
}

export default CalendarContainer;
