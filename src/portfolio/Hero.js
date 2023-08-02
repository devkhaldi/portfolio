import React from "react"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"

const Hero = () => {
  return (
    <section id='portfolio-hero' className='hero portfolio-hero'>
      <div className='hero-text my-container'>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
