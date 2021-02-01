import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <h1>Successful Web-apps Development</h1>
        <p>
          Hi. I’m Ian, a freelance Front-end Developer with 12 years commercial experience creating successful websites.
        </p>
      </div>

      <div className='hero-cards container'>
        <div className='row flex-md-nowrap'>
          <div className='card col-md-4 mx-md-3'>
            <img
              className='w-50'
              src='https://ianlunn.co.uk/static/0fe210187ee16bce95bb97c7ab3db41b/98c70/feature__web.webp'
              alt=''
            />
            <h2>UI,UX design implementation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quas.</p>
          </div>
          <div className='card col-md-4 mx-md-3'>
            <img
              className='w-50'
              src='https://ianlunn.co.uk/static/54f14637ec376524313424344767614c/98c70/feature__tools.webp'
              alt=''
            />
            <h2>React apps developement</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quas.</p>
          </div>
          <div className='card col-md-4 mx-md-3'>
            <img
              className='w-50'
              src='https://ianlunn.co.uk/static/fcaac44c20804fb66461aed9d410badd/98c70/feature__wp.webp'
              alt=''
            />
            <h2>APIs Building using Express</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
