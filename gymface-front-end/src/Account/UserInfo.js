import React from 'react';

const UserInfo = (props) => (
  <div>
    <h3>Account Information</h3>
    <span>Name: {props.user.name}</span><br />
    <span>Username: {props.user.username}</span><br />
    <span>Email: {props.user.email}</span><br />
    <span>Home Club: {props.user.home_club_id}</span>
  </div>
);

export default UserInfo;
