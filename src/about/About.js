import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "./About.css"

const About = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])
  return (
    <section className='about'>
      <h1>Here's my story</h1>
      <div className='intro'>
        <div className='img-text'>
          <img
            src='https://ianlunn.co.uk/static/091e12342fbe6aaa7cd88318022139b7/9f4ce/avatar-small%402x.webp'
            alt=''
          />
          <div className='text'>
            <p>
              I'm Abde, I' m a frontend developer , my mission is to translate
              modern, simple or complicated designs into pixel perfect websites
              or applications that run extermly fast.
            </p>
            <p>
              I have a computer science diploma, i understand the big image of
              web developement from database design to deployement, and also i
              have great problem solving skills and the ability to learn new
              technologies faster.
            </p>
            <p>
              My main experience is frontend developement but i also have
              passion for backend developement using Laravel and node, i belive
              having experience in backend also make me better frontend
              developer.
            </p>
          </div>
        </div>
      </div>

      <div className='getintouch'>
        <Link className='btn' exact to='/contact'>
          Get in touch
        </Link>
      </div>
    </section>
  )
}

export default About
