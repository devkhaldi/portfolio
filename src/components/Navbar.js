import React from "react"
import { Link, NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import "./Navbar.css"
import { useState } from "react"
import { BsMoon, BsSun } from "react-icons/bs"
import { useEffect } from "react"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [open, setopen] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    const body = document.querySelector("body")
    if (darkMode) body.className = "light-mode"
    else body.className = "dark-mode"
  }

  return (
    <React.Fragment>
      <nav className=''>
        <AiOutlineMenu className='menu-icon' onClick={() => setopen(!open)} />
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
          <button onClick={() => toggleDarkMode()} className='toggle-dark-mode'>
            {darkMode ? (
              <BsSun style={{ height: "1.7rem", width: "1.7rem" }} />
            ) : (
              <BsMoon style={{ height: "1.7rem", width: "1.7rem" }} />
            )}
          </button>
        </div>
      </nav>
      <div className={open ? "side-nav-items" : "side-nav-items open"}>
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
