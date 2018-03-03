import React from 'react';

const UserInfo = (props) => (
  <div>
    <span>Name: {props.user.name}</span><br />
    <span>Username: {props.user.username}</span><br />
    <span>Home Club: {props.user.home_club_id}</span>
  </div>
);

export default UserInfo;
