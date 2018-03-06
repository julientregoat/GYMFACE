import React from 'react';

// turn home club ID input to a dropdown select

const SignUpForm = () => (
  <form>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Email" />
    <input type="text" placeholder="Home Club ID" />
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <input type="submit" value="Sign Up" />
  </form>
);

export default SignUpForm;
