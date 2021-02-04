import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='about'>
      <h1>About El khaldi</h1>
      <div className='intro'>
        <img src='https://ianlunn.co.uk/static/091e12342fbe6aaa7cd88318022139b7/9f4ce/avatar-small%402x.webp' alt='' />
        <p>
          I am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate of
          Internet Technology. I create successful websites that are fast, easy to use, and built with best practices.
        </p>
        <p>
          My main experience is in front-end development but I also have a passion for design. Given that producing a
          modern website requires the combination of design, server technology, and the layer that users interacts with,
          I believe having experience in both design and development allows for making the most optimal user
          experiences.
        </p>
      </div>
      <div className='skills'>
        <p>
          I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best and
          most appropriate experience suited to their device and browser.
        </p>
        <p>
          I write standards based code that is semantic, accessible, search-engine friendly, easy to maintain, cross
          browser compatible, and performant.
        </p>
        <div className='skills-cards'>
          <div className='skill-card'>
            <img src='' alt='' />
            <h3></h3>
            <p></p>
          </div>
          <div className='skill-card'>
            <img src='' alt='' />
            <h3></h3>
            <p></p>
          </div>
          <div className='skill-card'>
            <img src='' alt='' />
            <h3></h3>
            <p></p>
          </div>
          <div className='skill-card'>
            <img src='' alt='' />
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
      <div className='getInTouch'>
        <Link exact to='/contact'>
          Get in touch
        </Link>
      </div>
    </section>
  )
}

export default About
