import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='logo-container'>
        <h2>EL KHALDI</h2>
      </div>
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
          <Link className='btn btn-primary' exact to='/getinTouch'>
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
