import React from "react"
import { Link } from "react-router-dom"
import illustration from "../img/undraw_programming.svg"
import "./Hero.css"

const Hero = () => {
  return (
    <section className='portfolio-hero'>
      <div className='hero-text'>
        <div className='text-content'>
          <h1>Front-end Development Portfolio</h1>
          <p>
            Succeed online with a website that is fast, easy to use, and built
            with best practices and a passion for design.
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
        <div className='hero-illustration'>
          <img src={illustration} alt='illustration' />
        </div>
      </div>
    </section>
  )
}

export default Hero
