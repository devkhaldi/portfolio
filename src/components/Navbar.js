import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='logo-container'>
        <Link exact to='/'>
          Khaldi
        </Link>
      </div>
      <div className='nav-items'>
        <NavLink className='nav-item' exact to='/'>
          Home
        </NavLink>
        <NavLink className='nav-item' exact to='/portfolio'>
          Portfolio
        </NavLink>
        <NavLink className='nav-item' exact to='/about'>
          About
        </NavLink>

        <div className='contact'>
          <Link className='btn' exact to='/contact'>
            Contact
          </Link>
        </div>
      </div>
      <div className='side-nav-items'>
        <NavLink className='nav-item' exact to='/'>
          Home
        </NavLink>
        <NavLink className='nav-item' exact to='/portfolio'>
          Portfolio
        </NavLink>
        <NavLink className='nav-item' exact to='/about'>
          About
        </NavLink>
        <div className='contact'>
          <Link className='nav-item' exact to='/getinTouch'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
