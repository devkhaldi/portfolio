import React from 'react'

const Project = ({ miniImage, title, description, mainImage }) => {
  return (
    <div className='project'>
      <div className='col-md-4'>
        <img src={miniImage} alt={`${title} + ${miniImage}`} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className='col-md-8'>
        <img src={mainImage} alt={`${title} + ${mainImage}`} />
      </div>
    </div>
  )
}

export default Project
