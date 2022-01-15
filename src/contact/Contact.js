import React, { useEffect } from "react"
import "./Contact.css"
import myPhoto from "../img/myphoto.jpg"

const Contact = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [])
  return (
    <section className='contact-page'>
      <div className='contact-content'>
        <h2>Get in touch</h2>
        <p>
          Send a general message or details of a project you'd like me to be a
          part of and I'll get back to you as soon as possible.
        </p>
        <div className='form-container'>
          <h4>About you</h4>
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
              <label htmlFor=''>Your Website</label>
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
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className='contact-about'>
        <h2>About Abde</h2>
        <div className='contact-info'>
          <img src={myPhoto} alt='myPhoto' />
          <span>
            My full name is Abderrahim El Khaldi, I create amazing modern and
            responsive websites using React I have an IT diploma from EST Fez
            Morocco. My mission is to translate modern, simple or complicated
            designs into pixel perfect websites or applications that run
            extermly fast.
          </span>
        </div>

        <div className='about-links'>
          Email : <span>pro.elhaldi@gmail.com</span> <br />
          Tel : <span>+212 6 59 43 22 70</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
