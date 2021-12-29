import React from "react"
import "./Hero.css"
import illustration from "../img/undraw_programming.svg"

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <div className='text-content'>
          <h1>Successful Web applications Development</h1>
          <p>
            Hi. I’m Ian, a freelance Front-end Developer with 12 years
            commercial experience creating successful websites.
          </p>
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
              <h3>UI,UX design implementation</h3>
              <p>
                Responsive websites built for an optimal user experience that
                achieves your business goals.
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
              <h3>React apps developement</h3>
              <p>
                Make your website fast, easy to find, and reach the widest
                audience possible.
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
              <h3>APIs Building using Express</h3>
              <p>
                Manage your website using the web's most popular content
                management system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
