import React, { Component } from 'react';

class Classes extends Component {


  state = {
    viewDate: {}
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
    .then(res => res.json()).then(json => console.log(json))
  }

  render() {
    return (
      <div>
        <h1> Viewing All Classes </h1>
        <h2>  </h2>
      </div>
    );
  }

}

export default Classes;
