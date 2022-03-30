import React, { useEffect } from "react"
import "./Hero.css"
import illustration from "../img/hero-img.svg"
import { Link } from "react-router-dom"
import cardsWave from "../img/cardsWave.svg"
import { AiOutlineTeam } from "react-icons/ai"
import { AiOutlineAntDesign } from "react-icons/ai"
import { SiReact } from "react-icons/si"
import { BsArrowRight } from "react-icons/bs"
import ellipse1 from "../img/ellipse1.svg"

const Hero = () => {
  const rotateEllipse = () => {
    const ellipse1 = document.getElementById("ellipse1")
    const ellipse2 = document.getElementById("ellipse2")
    // const ellipse3 = document.getElementById("ellipse3")
    let rotationAngle = 0

    setInterval(() => {
      console.log("rotate")
      ellipse1.style.transform = `rotateZ(${rotationAngle}deg)`
      ellipse2.style.transform = `rotateZ(${-rotationAngle}deg)`
      // ellipse2.style.transform = `rotateZ(${0.5 * rotationAngle}deg)`
      rotationAngle++
    }, 100)
  }

  useEffect(() => {
    rotateEllipse()
  }, [])
  return (
    <section className='hero'>
      <img src={ellipse1} className='ellipse1' id='ellipse1' alt='ellipse1' />
      <img src={ellipse1} className='ellipse2' id='ellipse2' alt='ellipse2' />
      {/* <img src={ellipse1} className='ellipse3' id='ellipse3' alt='ellipse3' /> */}
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
            Hi i'm <span>Abde</span>. I'm a Freelance FrontEnd developer.
          </h1>
          <p>
            My name is Abderrahim El Khaldi, I create Amazing Fast and Mobile
            friendly websites using HTML,CSS,JavaScript and React. And update
            existing website sections and React components.
          </p>
          <div className='hero-buttons'>
            <Link className='btn' exact to='/portfolio'>
              <span>View projects</span>
              <BsArrowRight />
            </Link>
            {/* <Link className='btn' exact to='/contact'>
              <span>Contact</span>
              <BsArrowRight />
            </Link> */}
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
              <SiReact size='8rem' />
            </div>
            <div className='text-container'>
              <h3>React apps development and data management</h3>
              <p>
                I create SPAs and efficiently manage components data using
                Context or Redux
              </p>
            </div>
          </div>
          <div className='card' data-aos='fade-down' data-aos-duration='2000'>
            <div className='img-container'>
              <AiOutlineTeam size='9rem' />
            </div>
            <div className='text-container'>
              <h3>Working within team</h3>
              <p>
                I have the ability to work within developers team, I have
                experience using version control.
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
