import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [open, setopen] = useState(true)
  console.log(open)
  return (
    <React.Fragment>
      <nav>
        <AiOutlineMenu onClick={() => setopen(!open)} />
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
      </nav>
      <div className={open ? 'side-nav-items' : 'side-nav-items open'}>
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
          <Link className='btn' exact to='/getinTouch'>
            Contact
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar
