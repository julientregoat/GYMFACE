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
    let today = new Date()
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
  }

  fetchClasses = () => {
    fetch('http://localhost:3001/klasses')
    .then(res => res.json()).then(classes => {
      this.setState({classes: classes})
    })
  }

  render() {
    return (
      <Grid centered columns={5}>
        <Grid.Row><h1> Viewing All Classes </h1></Grid.Row>

        {this.state.classes.map(clas => <CalendarItem key={clas.id} classInfo={clas}/>)}

      </Grid>
    );
  }

}

export default Classes;
