import React from "react"
import "./Project.css"

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
              Visit website
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
            <img
              data-aos={"fade-up"}
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
