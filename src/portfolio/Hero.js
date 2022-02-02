import React from "react"
import { Link } from "react-router-dom"
import illustration from "../img/hero-img.svg"
import "./Hero.css"

const Hero = () => {
  return (
    <section className='portfolio-hero my-container'>
      <div className='hero-text'>
        <div className='hero-illustration'>
          <img src={illustration} alt='illustration' />
        </div>
        <div className='text-content'>
          <h1>
            Hi i'm <span>Abde</span>. I'm a React devloper.
          </h1>
          <p>
            My name is Abderrahim El Khaldi, I create amazing modern and
            responsive websites using React, I have a Computer Science diploma
            from Higher school of technology Fez, Morocco
          </p>
          <div className='hero-buttons'>
            <Link className='btn' exact to='/portfolio'>
              View projects
            </Link>
            <Link className='btn' exact to='/contact'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
