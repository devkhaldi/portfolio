import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "./About.css"
import myPhoto from "../img/myphoto.png"
import { BsArrowRight } from "react-icons/bs"

const About = () => {
  useEffect(() => {
    // rotateEllipse()
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])
  return (
    <section className='about my-container'>
      <h1>Here's my story</h1>
      <div className='line' data-aos='fade-left'></div>
      <div className='intro'>
        <div className='img-text'>
          <img src={myPhoto} alt='myPhoto' />
          <div className='text' data-aos='fade-left'>
            <p>
              I'm Abderrahim, I'm a frontend developer, my mission is to
              translate modern, simple or complicated designs into pixel perfect
              websites or applications that run extremely fast.
            </p>
            <p>
              I have a computer science diploma, I understand the big image of
              web development from database design to deployment, and also i
              have great problem-solving skills and the ability to learn new
              technologies faster.
            </p>
            <p>
              My main experience is frontend development, but I also have
              passion for backend development using Laravel and node, I believe
              having experience in backend also make me better frontend
              developer.
            </p>
          </div>
        </div>
      </div>
      <div className='getintouch'>
        <Link className='btn' exact to='/contact'>
          <span>Get in touch</span>
          <BsArrowRight />
        </Link>
      </div>
    </section>
  )
}

export default About
