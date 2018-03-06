import React from 'react';

import Webcam from 'react-webcam'

const LoginForm = () => (
  <form>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <input type="submit" value="Login" />
  </form>
);

export default LoginForm;
