import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'
import ProjectModal from './ProjectModal'

const Project = ({ miniImage, title, description, mainImage }) => {
  return (
    <React.Fragment>
      <div className='project'>
        <ProjectModal />
        <div className='project-info col-lg-4 mx-md-2'>
          <img src={miniImage} alt={`${title} + ${miniImage}`} data-toggle='modal' data-target='#modal-default' />
          <h3 data-toggle='modal' data-target='#modal-default'>
            {title}
          </h3>
          <p>{description}</p>
        </div>
        <div className='project-preview col-lg-8 mx-md-2'>
          <img src={mainImage} alt={`${title} + ${mainImage}`} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Project
