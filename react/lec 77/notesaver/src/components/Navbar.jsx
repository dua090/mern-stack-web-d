import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex flex-row place-content-evenly gap-4'>
      <NavLink
      to="/">
Home
      </NavLink>
      <NavLink
      to="/pastes">
pastes
      </NavLink>
    </div>
  )
}

export default Navbar