import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='logo-container'>KHALDI</div>
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
        <NavLink className='nav-item' exact to='/about'>
          Articles
        </NavLink>
        <div className='getintouch'>
          <Link className='btn' exact to='/getinTouch'>
            Get in Touch
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
        <div className='getintouch'>
          <Link className='nav-item' exact to='/getinTouch'>
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
