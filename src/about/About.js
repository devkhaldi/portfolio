import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <section className='about'>
      <h1>About El khaldi</h1>
      <div className='intro'>
        <div className='img-text'>
          <img
            src='https://ianlunn.co.uk/static/091e12342fbe6aaa7cd88318022139b7/9f4ce/avatar-small%402x.webp'
            alt=''
          />
          <div className='text'>
            <p>
              I am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate
              of Internet Technology. I create successful websites that are fast, easy to use, and built with best
              practices.
            </p>
            <p>
              My main experience is in front-end development but I also have a passion for design. Given that producing
              a modern website requires the combination of design, server technology, and the layer that users interacts
              with, I believe having experience in both design and development allows for making the most optimal user
              experiences.
            </p>
          </div>
        </div>
      </div>
      <div className='skills'>
        <div className='skill-card'>
          <img src='https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png' alt='' />
          <div className='skill-text'>
            <h3>Lorem, ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit numquam quos quo praesentium architecto,
              explicabo quae iste tempore sed vel!
            </p>
          </div>
        </div>
        <div className='skill-card'>
          <img src='https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png' alt='' />
          <div className='skill-text'>
            <h3>Lorem, ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit numquam quos quo praesentium architecto,
              explicabo quae iste tempore sed vel!
            </p>
          </div>
        </div>
        <div className='skill-card'>
          <img src='https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png' alt='' />
          <div className='skill-text'>
            <h3>Lorem, ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit numquam quos quo praesentium architecto,
              explicabo quae iste tempore sed vel!
            </p>
          </div>
        </div>
        <div className='skill-card'>
          <img src='https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png' alt='' />
          <div className='skill-text'>
            <h3>Lorem, ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit numquam quos quo praesentium architecto,
              explicabo quae iste tempore sed vel!
            </p>
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
