import React, { Component } from 'react';
import CalendarItem from '../Dashboard/CalendarItem'

import { Grid } from 'semantic-ui-react'

class Classes extends Component {


  state = {
    viewDate: new Date().toString().slice(0, 15),
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

  fetchClasses = (date) => {
    fetch(`http://localhost:3001/klasses?date=${date}`)
    .then(res => res.json()).then(classes => {
      this.setState({classes: classes})
      date ? this.setState({viewDate: new Date(date).toString().slice(0, 15)}) : null
    })
  }

  addClass = (clas) => {
    fetch(`http://localhost:3001/user_klasses`,
    { method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {klass_id:clas.id, user_id:1}
      )
    }
    ).then(response => response.json())
     .then(console.log)
  }

  dropClass = (clas) => {
    fetch(`http://localhost:3001/user_klasses/1`,
    { method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {klass_id:clas.id, user_id:1}
      )
    }
    ).then(response => response.json())
     .then(console.log)
  }

  columnHeaders(){
    return { name: <h3>Name</h3>,
      instructor: <h3>Instructor</h3>,
      start_time: <h3>Start Time</h3>,
      end_time: <h3>End Time</h3>,
      joined: false
    }
  }

  handleCalendar = (event) => {
    this.fetchClasses(event.target.value)
  }

  // need to manage adding classes

  // loading screen for when class dates are loading?

  // display date is one day off. something to do with
  // javascript timezone. if I use .getUTCDate(), it returns the right one.

  render() {
    return (
      <Grid className="dashboard-cal page" centered columns={5}>
        <Grid.Row>
        <h1> Viewing All Classes for {this.state.viewDate}</h1>
        </Grid.Row>

        <Grid.Row className="calendarItem" >
          <span>View classes for another date:</span>
          <input type="date" onChange={this.handleCalendar}/>
        </Grid.Row>

        <CalendarItem classInfo={this.columnHeaders()} display={true}/>

        {this.state.classes.map(clas => <CalendarItem key={clas.id} classInfo={clas} addClass={this.addClass} dropClass={this.dropClass}/>)}

      </Grid>
    );
  }

}

export default Classes;
