import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
      <h1>Successful Mern stack apps Development</h1>
      <p>Hi. I’m Khaldi, a Full stack Developer creating successful websites. Services</p>
      <div className='container'>
        <div className='row flex-md-nowrap'>
          <div className='card col-md-4 mx-md-2'>
            <img
              className='w-50'
              src='https://ianlunn.co.uk/static/0fe210187ee16bce95bb97c7ab3db41b/98c70/feature__web.webp'
              alt=''
            />
            <h2>UI,UX design implementation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quas.</p>
          </div>
          <div className='card col-md-4 mx-md-2'>
            <img
              className='w-50'
              src='https://ianlunn.co.uk/static/54f14637ec376524313424344767614c/98c70/feature__tools.webp'
              alt=''
            />
            <h2>React apps developement</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quas.</p>
          </div>
          <div className='card col-md-4 mx-md-2'>
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
