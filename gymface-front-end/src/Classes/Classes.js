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
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
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

  render() {
    return (
      <Grid centered columns={5}>
        <Grid.Row><h1> Viewing All Classes for {this.state.viewDate.toString().slice(0, 15)}</h1></Grid.Row>
        <Grid.Row><input type="date" /></Grid.Row>
        
        <CalendarItem classInfo={this.columnHeaders()}/>

        {this.state.classes.map(clas => <CalendarItem key={clas.id} classInfo={clas}/>)}

      </Grid>
    );
  }

}

export default Classes;
