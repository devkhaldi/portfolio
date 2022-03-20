import React, { useEffect } from "react"
import "./Contact.css"
import myPhoto from "../img/myphoto.jpg"
import { BsArrowRight } from "react-icons/bs"
import ellipse1 from "../img/ellipse1.svg"

const Contact = () => {
  const rotateEllipse = () => {
    const ellipse1 = document.getElementById("ellipse1")
    const ellipse2 = document.getElementById("ellipse2")
    // const ellipse3 = document.getElementById("ellipse3")
    let rotationAngle = 0

    setInterval(() => {
      console.log("rotate")
      ellipse1.style.transform = `rotateZ(${rotationAngle}deg)`
      ellipse2.style.transform = `rotateZ(${-rotationAngle}deg)`
      // ellipse2.style.transform = `rotateZ(${0.5 * rotationAngle}deg)`
      rotationAngle++
    }, 100)
  }
  useEffect(() => {
    rotateEllipse()
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])
  return (
    <section className='contact-page my-container'>
      <img src={ellipse1} className='ellipse1' id='ellipse1' alt='ellipse1' />
      <img src={ellipse1} className='ellipse2' id='ellipse2' alt='ellipse2' />
      {/* <img src={ellipse1} className='ellipse3' id='ellipse3' alt='ellipse3' /> */}
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
        <h2>About Abde</h2>
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
          Email : <span>pro.elkhaldi@gmail.com</span> <br />
          Tel : <span>+212 6 59 43 22 70</span> <br />
          GitHub : <span>https://github.com/devkhaldi</span> <br />
        </div>
      </div>
    </section>
  )
}

export default Contact
