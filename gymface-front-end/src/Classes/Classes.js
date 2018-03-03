import React, { Component } from 'react';
import CalendarItem from '../Dashboard/CalendarItem'

import { Grid } from 'semantic-ui-react'

class Classes extends Component {


  state = {
    viewDate: new Date(),
    classes: []
  }

  componentDidMount(){
    this.fetchClasses()
  }

  strfDate(){
    let date = this.state.viewDate
    let paddedMonth = date.getMonth() + 1
    paddedMonth = paddedMonth < 10 ? "0" + paddedMonth : paddedMonth
    let paddedDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    return `${date.getFullYear()}-${paddedMonth}-${paddedDate}`
  }

  fetchClasses = () => {
    fetch('http://localhost:3001/klasses')
    .then(res => res.json()).then(classes => {
      this.setState({classes: classes})
    })
  }
  
  columnHeaders(){
    return { name: <h3>Name</h3>,
      instructor: <h3>Instructor</h3>,
      start_time: <h3>Start Time</h3>,
      end_time: <h3>End Time</h3>,
      joined: false
    }
  }
  
  handleCalendar = () => {
    // only change if date isn't the same as previous viewDate
    console.log("calendar!")
  }
  
  // need to manage adding classes
  
  // loading screen for when class dates are loading?

  render() {
    return (
      <Grid centered columns={5}>
        <Grid.Row><h1> Viewing All Classes for {this.state.viewDate.toString().slice(0, 15)}</h1></Grid.Row>
        <Grid.Row><input type="date" value={this.strfDate()} onChange={this.handleCalendar}/></Grid.Row>
        
        <CalendarItem classInfo={this.columnHeaders()}/>

        {this.state.classes.map(clas => <CalendarItem key={clas.id} classInfo={clas}/>)}

      </Grid>
    );
  }

}

export default Classes;
