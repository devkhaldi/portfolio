import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='logo-container'>EL KHALDI</div>
      <div className='nav-items'>
        <Link className='nav-item' exact to='/'>
          Home
        </Link>
        <Link className='nav-item' exact to='/portfolio'>
          Portfolio
        </Link>
        <Link className='nav-item' exact to='/about'>
          About
        </Link>
        <div className='getintouch'>
          <Link className='btn' exact to='/getinTouch'>
            Get in Touch
          </Link>
        </div>
      </div>
      <div className='side-nav-items'>
        <Link className='nav-item' exact to='/'>
          Home
        </Link>
        <Link className='nav-item' exact to='/portfolio'>
          Portfolio
        </Link>
        <Link className='nav-item' exact to='/about'>
          About
        </Link>
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
