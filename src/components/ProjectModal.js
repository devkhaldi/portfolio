import React from 'react'
import Modal from './Modal'

const ProjectModal = ({ project }) => {
  return (
    <Modal title='Project'>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.mainImage} className='w-100' alt={`${project.mainImage} ${project.title}`} />
    </Modal>
  )
}

export default ProjectModal
