import React from "react"
import "./Hero.css"
import illustration from "../img/hero-img.svg"
import { Link } from "react-router-dom"
import cardsWave from "../img/cardsWave.svg"
import { AiOutlineTeam } from "react-icons/ai"
import { AiOutlineAntDesign } from "react-icons/ai"
import { SiRedux } from "react-icons/si"
import topWave from "../img/topWave.svg"
import { BsMoon, BsSun, BsArrowRight } from "react-icons/bs"

const Hero = () => {
  return (
    <section className='hero'>
      {/* <img
        className='top-wave'
        src={topWave}
        alt='top-wave'
        data-aos='fade-down'
        data-aos-dration='4000'
      /> */}
      <div className='hero-text my-container'>
        <div className='hero-illustration'>
          <img src={illustration} alt='illustration' data-aos='fade-right' />
        </div>
        <div className='text-content' data-aos='fade-down'>
          <div className='name'>
            <div className='name-line'></div>
            <span>Abderrahim El khaldi</span>
          </div>
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
              <span>View projects</span>
              <BsArrowRight />
            </Link>
            <Link className='btn' exact to='/contact'>
              <span>Contact</span>
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className='hero-cards'>
        <div className='cards'>
          <div className='card' data-aos='fade-down' data-aos-duration='1000'>
            <div className='img-container'>
              <AiOutlineAntDesign size='8rem' />
            </div>
            <div className='text-container'>
              <h3>Implement UI and UX designs</h3>
              <p>
                Convert website design to pixel perfect HTML and CSS pages or
                React components
              </p>
            </div>
          </div>

          <div className='card' data-aos='fade-down' data-aos-duration='1500'>
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
          <div className='card' data-aos='fade-down' data-aos-duration='2000'>
            <div className='img-container'>
              <AiOutlineTeam size='9rem' />
            </div>
            <div className='text-container'>
              <h3>Working with team</h3>
              <p>
                I have the ability to work within developers team, I know how to
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
