import React from "react"
import "./Contact.css"

const Contact = () => {
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
                rows='5'
                className='form-control'></textarea>
            </div>
            <button type='submit' className='btn'>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className='contact-about'>
        <h2>About El khaldi</h2>
        <div className='contact-info'>
          <img
            src='https://ianlunn.co.uk/static/091e12342fbe6aaa7cd88318022139b7/9f4ce/avatar-small%402x.webp'
            alt=''
          />
          <span>
            I am a Front-end Developer with 12 years commercial experience,
            author of CSS3 Foundations, and graduate of Internet Technology. I
            create successful websites that are fast, easy to use, and built
            with best practices.
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
