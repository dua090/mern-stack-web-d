import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className='navba'>
            <li><NavLink to="/" className={({isActive})=>isActive?"active-link":""}>Home</NavLink></li>
            <li> <NavLink to="/about" className={({isActive})=>isActive?"active-link":""}>about</NavLink></li>
            <li><NavLink to="/dashboard" className={({isActive})=>isActive?"active-link":""}>dashboard</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar