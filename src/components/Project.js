import React from "react"
import { Link } from "react-router-dom"
import "./Project.css"

const Project = ({ project, putProjectInModal }) => {
  return (
    <React.Fragment>
      <div className='project' data-aos='fade-up' data-aos-once='true'>
        <div className='project-info col-lg-4 mx-md-2'>
          <div className='img-container'>
            <img
              onClick={() => putProjectInModal(project)}
              src={project.miniImage}
              alt={`${project.title} + ${project.miniImage}`}
              // data-toggle='modal'
              // data-target='#modal-default'
            />
          </div>
          <h3 onClick={() => putProjectInModal(project)}>{project.title}</h3>
          <p>{project.description}</p>
          <a
            target='_blank'
            href='https://www.google.com'
            className='btn'
            rel='noopener noreferrer'>
            Explore
          </a>
        </div>
        <div className='project-preview col-lg-8 mx-md-2'>
          <img
            onClick={() => putProjectInModal(project)}
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
