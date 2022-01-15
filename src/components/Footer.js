import React from "react"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./Footer.css"
import myPhoto from "../img/myphoto.jpg"

const Footer = () => {
  return (
    <footer>
      <div className='footer-content'>
        <div className='about'>
          <div className='img-container'>
            <img src={myPhoto} alt='myphoto' />
          </div>
          <div className='about-content'>
            My full name is Abderrahim El Khaldi, I create amazing modern and
            responsive websites using React I have an IT diploma from EST Fez
            Morocco. My mission is to translate modern, simple or complicated
            designs into pixel perfect websites or applications that run
            extermly fast.
          </div>
        </div>
        <div className='links'>
          <div className='social-links'>
            <div className='social-link'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/devkhaldi'>
                <FaGithub />
                <span>Github</span>
              </a>
              <span>Follow to see projects source code and more.</span>
            </div>
            <div className='social-link'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/abderrahim-el-khaldi-744b72194/'>
                <FaLinkedinIn />
                <span>Linkedin</span>
              </a>
              <span>Let's connect on LinkedIn</span>
            </div>
          </div>
          <div className='portfolio-links'>
            <div className='portfolio-link'>
              <Link exact to='/about'>
                About
              </Link>
              <span>Learn more about me </span>
            </div>
            <div className='portfolio-link'>
              <Link exact to='/portfolio'>
                Portfolio
              </Link>
              <span>View Abde's previous work</span>
            </div>
            <div className='portfolio-link'>
              <Link exact to='/portfolio'>
                Contact
              </Link>
              <span>Send a general message</span>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright-section'>
        Copyright © 2022 Abderrahim El khaldi
      </div>
    </footer>
  )
}

export default Footer
