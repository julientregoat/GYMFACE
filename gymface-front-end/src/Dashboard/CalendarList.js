import React from "react"
import CalendarItem from "./CalendarItem"

import { Grid } from 'semantic-ui-react'

const CalendarList = (props) => {
//map through classlist from fetch 
  return (
    <Grid centered columns={5}>
      <CalendarItem/>
    </Grid>
  );
}


export default CalendarList;
