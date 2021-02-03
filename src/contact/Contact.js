import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact pt-5'>
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
      <div className='contact-about'></div>
    </section>
  )
}

export default Contact
