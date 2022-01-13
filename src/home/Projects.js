import React, { useState } from "react"
import { Link } from "react-router-dom"
import Project from "../components/Project"
import { MdKeyboardArrowRight } from "react-icons/md"
import "./Projects.css"
import covidTracker from "../img/covidtracker.png"
import dolla from "../img/dolla.png"
import menaraTravel from "../img/menaraTravel.png"
import modernui from "../img/modernui.png"
import soundTrap from "../img/soundTrap.png"
import wildfiremap from "../img/wildfiremap.png"

const Projects = () => {
  return (
    <React.Fragment>
      <section className='projects'>
        <div className='header'>
          <h1>Featured works.</h1>
        </div>
        <div className='projects-container'>
          {projects.map(project => (
            <Project key={project.id} project={project} />
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
    title: "Storage App",
    miniImage: modernui,
    mainImage: modernui,
    url: "https://storage-ui.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/Test-Front-END",
    description:
      "I created a prototype for a website desing, i used Bootstrap and React for this project ",
  },
  {
    id: 2,
    title: "Menara Travels",
    miniImage: menaraTravel,
    mainImage: menaraTravel,
    url: "https://menara.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/Travel-Agency",
    description:
      "Travel agencies provide conveyance, accomodation and entertaiment for individuals and groups scheduling trips, so i created frontend side for travel agency website using React, React router, Html and CSS",
  },
  {
    id: 3,
    title: "Sound Trap",
    miniImage: soundTrap,
    mainImage: soundTrap,
    url: "https://soundtrap.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/Music-Landing-Page",
    description:
      "I Created clone landing page for Sountrap website using Html CSS flexbox grid and javascript, this landing page is compatible for all types of devices and screens",
  },
]

export default Projects
