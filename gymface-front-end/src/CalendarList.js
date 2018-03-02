import React from "react"
import CalendarItem from "./CalendarItem"

import { Grid } from 'semantic-ui-react'

const CalendarList = (props) => {
//map through classlist from fetch 
  return (
    <Grid columns={5} centered>
      <CalendarItem/>
    </Grid>
  );
}


export default CalendarList;
