import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'

const Project = ({ project, putProjectInModal }) => {
  return (
    <React.Fragment>
      <div className='project'>
        <div className='project-info col-lg-4 mx-md-2'>
          <img
            onClick={() => putProjectInModal(project)}
            src={project.miniImage}
            alt={`${project.title} + ${project.miniImage}`}
            data-toggle='modal'
            data-target='#modal-default'
          />
          <h3 data-toggle='modal' data-target='#modal-default'>
            {project.title}
          </h3>
          <p>{project.description}</p>
        </div>
        <div className='project-preview col-lg-8 mx-md-2'>
          <img src={project.mainImage} alt={`${project.title} + ${project.mainImage}`} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Project
