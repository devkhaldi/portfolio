import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact-page'>
      <div className='contact-content'>
        <h1>Get in touch</h1>
        <p>
          Send a general message or details of a project you'd like me to be a part of and I'll get back to you as soon
          as possible.
        </p>
        <div className='form-container'>
          <h2>About you</h2>
          <form>
            <div>
              <input id='yourName' type='text' className='form-control' />
              <label htmlFor=''>Your Name</label>
            </div>
            <div>
              <input id='email' type='text' className='form-control' />
              <label htmlFor=''>Email</label>
            </div>
            <div>
              <input id='yourWebsite' type='text' className='form-control' />
              <label htmlFor=''>Your Website</label>
            </div>
            <div>
              <label htmlFor='generalMessage'>General Message</label>
              <textarea id='generalMessage' cols='30' rows='10' className='form-control'></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className='contact-about'>
        <h2>About El khaldi</h2>
        <img src='https://ianlunn.co.uk/static/091e12342fbe6aaa7cd88318022139b7/9f4ce/avatar-small%402x.webp' alt='' />I
        am a Front-end Developer with 12 years commercial experience, author of CSS3 Foundations, and graduate of
        Internet Technology. I create successful websites that are fast, easy to use, and built with best practices.
        <div className='about-links'>
          Email : <span>pro.elhaldi@gmail.com</span> <br />
          Tel : <span>+212 6 59 43 22 70</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
