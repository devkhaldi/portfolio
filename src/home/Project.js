import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'

const Project = ({ miniImage, title, description, mainImage }) => {
  return (
    <div className='project'>
      <div className='project-info col-lg-4 mx-md-2'>
        <img src={miniImage} alt={`${title} + ${miniImage}`} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className='project-preview col-lg-8 mx-md-2'>
        <img src={mainImage} alt={`${title} + ${mainImage}`} />
      </div>
    </div>
  )
}

export default Project
