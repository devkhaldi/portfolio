import React, { useState } from "react"
import { Link } from "react-router-dom"
import Project from "../components/Project"
import ProjectModal from "../components/ProjectModal"
import { MdKeyboardArrowRight } from "react-icons/md"
import "./Projects.css"

const Projects = () => {
  const [selectedProject, setselectedProject] = useState(projects[0])
  const putProjectInModal = project => setselectedProject(project)
  return (
    <React.Fragment>
      <ProjectModal project={selectedProject} />
      <section className='projects'>
        <div className='header'>
          <h1>Featured Work</h1>
        </div>
        <div className='projects-container'>
          {projects.map(project => (
            <Project
              key={project.id}
              project={project}
              putProjectInModal={putProjectInModal}
            />
          ))}
        </div>
        <div className='btn-container'>
          <Link exact to='/contact' className='btn'>
            Get In Touch
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </section>
    </React.Fragment>
  )
}

const projects = [
  {
    id: 1,
    title: "Travel Agency",
    miniImage:
      "https://ianlunn.co.uk/static/6648385b8d9c6f65bffe9de5345841f9/58556/thumb.webp",
    mainImage:
      "https://ianlunn.co.uk/static/c3b68c2d76a8cfbac4cb7504073c006a/8b5b8/preview-medium.webp",
    description:
      "I was the designer and front-end developer for the initial Pet Plate website in 2015 and worked closely with the company as it grew over a period of 5 years, eventually becoming Lead Front-end Developer. By early 2020, Pet Plate had successfully raised a total investment fund of $13 million dollars.",
  },
  {
    id: 2,
    title: "Student Management System",
    miniImage:
      "https://ianlunn.co.uk/static/8cfd92cd0b7cc715478f4583694900e1/58556/thumb.webp",
    mainImage:
      "https://ianlunn.co.uk/static/78f335dd1ce5eff91f0109369c6b0326/8b5b8/preview-medium.webp",
    description:
      "Red Six Media approached me to develop an interactive and smooth front-end experience for the LSU - Football Operations Facility Expansion. The project required solutions to produce a website that matched the detailed designs and interactivity concepts provided by Red Six Media whilst remaining fast to use across a wide range of devices.",
  },
  {
    id: 3,
    title: "This is another title",
    miniImage:
      "https://ianlunn.co.uk/static/07992202553c044dbedae09013417dd7/58556/thumb.webp",
    mainImage:
      "https://ianlunn.co.uk/static/44b03da123fa45a2064382279dbed5b3/8b5b8/preview-medium.webp",
    description:
      "CSS3 Foundations is a book I wrote in 2012 guiding readers through the process of using CSS3 features and techniques to take a basic website template and turn it into a real-world, modern and future proof website. It was published in paperback and digital formats by Wiley and later translated to Chinese. It was well received with a review score of 4.5 out of 5 on Amazon.",
  },
]

export default Projects
