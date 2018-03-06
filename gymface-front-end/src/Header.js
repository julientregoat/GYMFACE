import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header = () => (
  <div id="header">
    <h1>GymFace</h1>
    <Menu inverted>
      <Link to="/"><Menu.Item content="Dashboard"/></Link>
      <Link to="/classes"><Menu.Item content="View Classes"/></Link>
      <Menu.Item position="right" content={<Link to="/account">My Account</Link>}/>
    </Menu>

  </div>
);

export default Header;
