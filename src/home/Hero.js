import React from "react"
import "./Hero.css"
import illustration from "../img/undraw_programming.svg"
import { Link } from "react-router-dom"
import cardsWave from "../img/cardsWave.svg"
import { AiOutlineTeam } from "react-icons/ai"
import { AiOutlineAntDesign } from "react-icons/ai"
import { SiRedux } from "react-icons/si"

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
            responsive websites using React I have an Information Technology
            diploma from EST Fez Morocco
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
              <AiOutlineAntDesign size='8rem' />
            </div>
            <div className='text-container'>
              <h3>Implement UI and UX designs</h3>
              <p>
                Convert website design to pixel perfect Html and CSS pages or
                React components
              </p>
            </div>
          </div>

          <div className='card mx-md-3'>
            <div className='img-container'>
              <SiRedux size='8rem' />
            </div>
            <div className='text-container'>
              <h3>React apps development and data management</h3>
              <p>
                I'm able to create SPAs and efficiently manage components data
                using Context or Redux
              </p>
            </div>
          </div>
          <div className='card mx-md-3'>
            <div className='img-container'>
              <AiOutlineTeam size='9rem' />
            </div>
            <div className='text-container'>
              <h3>Working with team</h3>
              <p>
                I have the ability to work within developers team, i know how to
                use version control and tools like slack
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
