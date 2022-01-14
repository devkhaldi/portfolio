import React from "react"
import "./Project.css"

const Project = ({ project }) => {
  return (
    <React.Fragment>
      <div className='project'>
        <div className='project-info col-lg-4 mx-md-2'>
          <div className='img-container'>
            <img
              src={project.miniImage}
              alt={`${project.title} + ${project.miniImage}`}
              // data-toggle='modal'
              // data-target='#modal-default'
            />
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className='btns'>
            <a
              target='_blank'
              href={project.url}
              className='btn'
              rel='noopener noreferrer'>
              Link
            </a>
            <a
              target='_blank'
              href={project.sourceCode}
              className='btn'
              rel='noopener noreferrer'>
              Source code
            </a>
          </div>
        </div>
        <div className='project-preview col-lg-8 mx-md-2'>
          <img
            src={project.mainImage}
            alt={`${project.title} + ${project.mainImage}`}
            // data-toggle='modal'
            // data-target='#modal-default'
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Project
