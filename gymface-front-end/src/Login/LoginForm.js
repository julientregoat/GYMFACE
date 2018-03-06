import React from 'react';

import Webcam from 'react-webcam'

const LoginForm = (props) => (
  <form onSubmit={props.loginCallback}>
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <input type="submit" value="Login" />
  </form>
);

export default LoginForm;
