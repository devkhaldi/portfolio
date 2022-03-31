import React from "react"
import "./Project.css"
import { BsArrowRight } from "react-icons/bs"
import phoneFrame from "../img/phoneFrame.png"

const Project = ({ project }) => {
  return (
    <React.Fragment>
      <div className='project'>
        <div className='project-info mx-md-2' data-aos='fade-down'>
          <div className='img-container'>
            <img
              src={project.miniImage}
              alt={`${project.title} + ${project.miniImage}`}
              // data-toggle='modal'
              // data-target='#modal-default'
            />
          </div>

          <h3>{project.title}</h3>
          <div className='line'></div>
          <p>{project.description}</p>
          <div className='btns' data-aos='fade-right' data-aos-duration='2000'>
            <a
              target='_blank'
              href={project.url}
              className='btn'
              rel='noopener noreferrer'>
              <span>Visit website</span>
              <BsArrowRight />
            </a>
            {/* <a
              target='_blank'
              href={project.sourceCode}
              className='btn'
              rel='noopener noreferrer'>
              Source code
            </a> */}
          </div>
        </div>
        <div className='project-preview  mx-md-2'>
          <div className='imgs-container'>
            <div className='phone' id='phone'>
              <img src={phoneFrame} className='phone-frame' alt='phone frame' />
              <img
                src={project.mobileImage}
                className='mobile-image'
                alt='mobile image'
              />
            </div>
            <img
              className='mainImage'
              src={project.mainImage}
              alt={`${project.title} + ${project.mainImage}`}
              // data-toggle='modal'
              // data-target='#modal-default'
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Project
