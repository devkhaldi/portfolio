import React from 'react'
import Modal from './Modal'

const ProjectModal = ({ project }) => {
  console.log(project)
  return (
    <Modal title='Project'>
      <h1>{project.title}</h1>
    </Modal>
  )
}

export default ProjectModal
