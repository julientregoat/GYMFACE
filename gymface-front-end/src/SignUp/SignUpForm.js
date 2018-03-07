import React from 'react';
import CLUBS from '../ClubData'

const SignUpForm = (props) => (
  <form onSubmit={props.submit}>
    <input type="text" name="name"placeholder="Name" /><br/>
    <input type="text" name="email" placeholder="Email" /><br/>
    <select name="club" placeholder="Pick your club location...">
      {Object.keys(CLUBS).map(id => <option value={id} key={id}>{CLUBS[id]}</option>)}
    </select><br/>
    <input type="text" name="username"placeholder="Username" /><br/>
    <input type="password" name="password" placeholder="Password" /><br/>
    <input type="submit" value="Sign Up" /><br/>
  </form>
);

export default SignUpForm;
