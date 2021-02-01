import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='about'>
          <div className='img-container'>
            <img
              src='https://ianlunn.co.uk/static/091e12342fbe6aaa7cd88318022139b7/9f4ce/avatar-small%402x.webp'
              alt=''
            />
          </div>
          <div className='about-content'>
            I am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate of
            Internet Technology. I create successful websites that are fast, easy to use, and built with best practices.
          </div>
        </div>
        <div className='social-links'>
          <div className='social-link'>
            <a href='#'>
              <FaGithub />
              <span>GITHUB</span>
            </a>
            <span>Follow for open-source projects such as Hover.css, Sequence.js, and jQuery Parallax</span>
          </div>
          <div className='social-link'>
            <a href='#'>
              <FaLinkedinIn />
              <span>LINKEDIN</span>
            </a>
            <span>Let's connect on LinkedIn</span>
          </div>
        </div>
        <div className='portfolio-links'>
          <div className='portfolio-link'>
            <Link exact to='/about'>
              ABOUT
            </Link>
            <span>Learn about Ian's skills and workflow</span>
          </div>
          <div className='portfolio-link'>
            <Link exact to='/portfolio'>
              PORTFOLIO
            </Link>
            <span>View Ian's previous work</span>
          </div>
          <div className='portfolio-link'>
            <Link exact to='/portfolio'>
              CONTACT
            </Link>
            <span>Send a generale message</span>
          </div>
        </div>
      </div>
      <div className='copyright-section'>Copyright © 2021 Ian Lunn Design Limited</div>
    </footer>
  )
}

export default Footer
