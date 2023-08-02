import React, { useEffect } from "react"
import "./Contact.css"
import myPhoto from "../img/myphoto.png"
import { BsArrowRight } from "react-icons/bs"

const Contact = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])
  return (
    <section className='contact-page my-container'>
      <div className='contact-content'>
        <h2>Get in touch</h2>
        <div className='line' data-aos='fade-left'></div>
        <p>
          Send a general message or details of a project you'd like me to be a
          part of, and I'll get back to you as soon as possible.
        </p>
        <div className='form-container' data-aos='fade-up'>
          <form method='post' name='contact' data-netlify='true'>
            <input type='hidden' name='form-name' value='contact' />
            <div className='input-container'>
              <label htmlFor='yourName'>Your Name</label>
              <input
                name='yourName'
                id='yourName'
                type='text'
                className='form-control'
              />
            </div>
            <div className='input-container'>
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                id='email'
                type='email'
                className='form-control'
              />
            </div>
            <div className='input-container'>
              <label htmlFor='yourWebsite'>Your Website</label>
              <input
                name='yourWebsite'
                id='yourWebsite'
                type='text'
                className='form-control'
              />
            </div>
            <div className='input-container'>
              <label htmlFor='generalMessage'>General Message</label>
              <textarea
                name='generalMessage'
                id='generalMessage'
                cols='30'
                rows='10'
                className='form-control'></textarea>
            </div>
            <button type='submit' className='btn'>
              <span>Send Message</span>
              <BsArrowRight />
            </button>
          </form>
        </div>
      </div>
      <div className='contact-about'>
        <h2>About Me</h2>
        <div className='line' data-aos='fade-left'></div>
        <div className='contact-info' data-aos='fade-up'>
          <img src={myPhoto} alt='myPhoto' />
          <span>
            My name is Abderrahim El Khaldi, I create amazing modern and
            responsive websites using React, I have an CS diploma from EST Fez
            Morocco. My mission is to translate modern, simple or complicated
            designs into pixel perfect websites or applications that run
            extremely fast.
          </span>
        </div>

        <div className='about-links' data-aos='fade-up'>
          Email :
          <a href='mailto:pro.elkhaldi@gmail.com'>pro.elkhaldi@gmail.com</a>
          <br />
          Tel : <a href='tel:+212613501230'>+212 6 13 50 12 30</a> <br />
          GitHub :
          <a
            href='https://github.com/devkhaldi'
            target='_blank'
            rel='noopener noreferrer'>
            https://github.com/devkhaldi
          </a>
          <br />
        </div>
      </div>
    </section>
  )
}

export default Contact
