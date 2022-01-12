import React from "react"
import "./Hero.css"
import illustration from "../img/undraw_programming.svg"
import { Link } from "react-router-dom"
import cardsWave from "../img/cardsWave.svg"

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <div className='text-content'>
          <h1>
            Hi i'm <span>Abde</span>. I'm a React devloper.
          </h1>
          <p>
            My full name is Abderrahim El Khaldi, I create amazing modern and
            responsive websites using React I have an IT diploma from EST Fez
            Morocco
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
      <div className='hero-cards container'>
        <div className='cards'>
          <div className='card mx-md-3'>
            <div className='img-container'>
              <img
                src='https://ianlunn.co.uk/static/0fe210187ee16bce95bb97c7ab3db41b/98c70/feature__web.webp'
                alt=''
              />
            </div>
            <div className='text-container'>
              <h3>Implement UI and UX designs</h3>
              <p>
                Convert website design to pixel perfect to Html and CSS pages or
                React components
              </p>
            </div>
          </div>

          <div className='card mx-md-3'>
            <div className='img-container'>
              <img
                src='https://ianlunn.co.uk/static/54f14637ec376524313424344767614c/98c70/feature__tools.webp'
                alt=''
              />
            </div>
            <div className='text-container'>
              <h3>React apps development and data management</h3>
              <p>
                I'm able to SPA using React-Router and efficiently manage
                components data using Context or Redux
              </p>
            </div>
          </div>
          <div className='card mx-md-3'>
            <div className='img-container'>
              <img
                src='https://ianlunn.co.uk/static/fcaac44c20804fb66461aed9d410badd/98c70/feature__wp.webp'
                alt=''
              />
            </div>
            <div className='text-container'>
              <h3>Working with team</h3>
              <p>
                I have the ability to work within team, i know how to use
                version control systems and tools like slack
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className='hero-wave' src={cardsWave} alt='cardsWave' />
    </section>
  )
}

export default Hero
