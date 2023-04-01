import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import illustration from "../img/hero-img.svg"
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
    }, 400)
  }

  // useEffect(() => {
  //   // rotateEllipse()
  // }, [])

  return (
    <section id='portfolio-hero' className='hero portfolio-hero'>
      {/* <img src={ellipse1} className='ellipse1' id='ellipse1' alt='ellipse1' />
      <img src={ellipse1} className='ellipse2' id='ellipse2' alt='ellipse2' /> */}
      {/* <img src={ellipse1} className='ellipse3' id='ellipse3' alt='ellipse3' /> */}
      <div className='hero-text my-container'>
        {/* <div className='hero-illustration'>
          <img src={illustration} alt='illustration' data-aos='fade-right' />
        </div> */}
        <div className='text-content' data-aos='fade-down'>
          <div className='name'>
            <span>Abderrahim El khaldi</span>
          </div>
          <h1>
            Hi I'm <span>Abderrahim</span>. <br /> I'm a Frontend developer.
          </h1>
          <p>
            My name is Abderrahim El Khaldi. I create mobile friendly websites
            using HTML,CSS,JavaScript and React. Also I build Wordpress and
            WooCommerce stores.
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
    </section>
  )
}

export default Hero
