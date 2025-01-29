import React from 'react'
import manu from '../assets/manu.jpg'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className= 'user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id='usr-img' src={props.img} alt={props.name} />
        <p id='user-desc'>{props.desc}</p>
         
    </div>
  )
}

export default UserCard