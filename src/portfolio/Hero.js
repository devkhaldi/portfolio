import React from "react"
import { Link } from "react-router-dom"
import illustration from "../img/hero-img.svg"
import "./Hero.css"

const Hero = () => {
  return (
    <section className='portfolio-hero '>
      <div className='hero-text my-container'>
        <div className='hero-illustration'>
          <img src={illustration} alt='illustration' data-aos='fade-right' />
        </div>
        <div className='text-content' data-aos='fade-down'>
          <h1>
            Hi i'm <span>Abde</span>. I'm a Frontend developer.
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
