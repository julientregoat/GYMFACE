import React from 'react';

const UserInfo = (props) => (

  if (props.edit){
    <h3>Account Information</h3>
    <input onChange={props.handleInputChange} name="name" value={props.user.name}></input><br />
    <input value={props.user.username} name="username" ></input><br />
    <input value={props.user.email} name="email" ></input><br />
    <input value={props.user.home_club_id} name="home_club_id" ></input>
    <button onClick={()=>props.updateInfo(props.user)}>Update Info</button>
  </div>
  } else {
    <div>
      <h3>Account Information</h3>
      <span>Name: {props.user.name}</span><br />
      <span>Username: {props.user.username}</span><br />
      <span>Email: {props.user.email}</span><br />
      <span>Home Club: {props.user.home_club_id}</span>
    </div>
  }

);

export default UserInfo;
