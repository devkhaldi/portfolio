import React from "react"
import "./Hero.css"
import { Link } from "react-router-dom"
import cardsWave from "../img/cardsWave.svg"
import { AiOutlineAntDesign } from "react-icons/ai"
import { TbBrandReact } from "react-icons/tb"
import { BsArrowRight } from "react-icons/bs"
import { FaWordpressSimple } from "react-icons/fa"

const Hero = () => {
  return (
    <section className='hero'>
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
              <span>View Previous Work</span>
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className='hero-cards'>
        <div className='cards'>
          <div className='card'>
            <div className='img-container'>
              <AiOutlineAntDesign size='5rem' />
            </div>
            <div className='text-container'>
              <h3>Implement UI and UX designs</h3>
              <p>
                Convert website design to pixel perfect HTML and CSS pages or
                React components
              </p>
            </div>
          </div>

          <div className='card'>
            <div className='img-container'>
              <TbBrandReact size='5rem' />
            </div>
            <div className='text-container'>
              <h3>React apps development and data management</h3>
              <p>
                I create SPAs and efficiently manage components data using
                Context or Redux
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='img-container'>
              <FaWordpressSimple size='5rem' />
            </div>
            <div className='text-container'>
              <h3>Wordpress and Woocommerce</h3>
              <p>
                Build SEO friendly Wordpress and WooCommerce stores and websites
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
