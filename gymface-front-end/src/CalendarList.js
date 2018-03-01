import React from "react"
import CalendarItem from "./CalendarItem"

const CalendarList (props) => {
//map through classlist from fetch 
    return (
      <div classname="mini-border">
        <h1>CalendarList</h1>
        <CalendarItem/>
      </div>
    );
  }
}

export default CalendarList;
