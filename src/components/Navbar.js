import React from "react"
import { Link, NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import "./Navbar.css"
import { useState } from "react"
import { BsMoon, BsSun, BsArrowRight } from "react-icons/bs"

const Navbar = () => {
  const [open, setopen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  /* // Get system theme
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
  useEffect(() => {
    // Set system theme
    if (darkThemeMq.matches === true) {
      body.className = "dark-mode"
      setDarkMode(true)
    }
  }, []) */
  const body = document.querySelector("body")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) body.className = "light-mode"
    else body.className = "dark-mode"
    console.log(darkMode)
  }

  return (
    <React.Fragment>
      <nav className=''>
        <AiOutlineMenu className='menu-icon' onClick={() => setopen(!open)} />
        <div className='logo-container'>
          <Link exact to='/'>
            El Khaldi
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
              <span>Contact</span>
              <BsArrowRight />
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
        <NavLink
          className='nav-item'
          exact
          to='/'
          onClick={() => setopen(!open)}>
          Home
        </NavLink>
        <NavLink
          className='nav-item'
          exact
          to='/portfolio'
          onClick={() => setopen(!open)}>
          Portfolio
        </NavLink>
        <NavLink
          className='nav-item'
          exact
          to='/about'
          onClick={() => setopen(!open)}>
          About
        </NavLink>
        <div className='contact'>
          <Link
            className='btn'
            exact
            to='/contact'
            onClick={() => setopen(!open)}>
            Contact
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar
