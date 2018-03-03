import React from 'react';
import { BrowserRouter as NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header = () => (
  <div id="header">
    <h1>GymFace Header</h1>
    <Menu inverted>
      <Menu.Item content="Dashboard"/>
      <Menu.Item content="View Classes"/>
      <Menu.Item content="View Restaurants"/>
      <Menu.Item position="right" content="Your Account"/>
    </Menu>
  </div>
);

export default Header;
