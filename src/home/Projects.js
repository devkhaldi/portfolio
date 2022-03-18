import React from "react"
import { Link } from "react-router-dom"
import Project from "../components/Project"
import "./Projects.css"
import menaraTravel from "../img/menaraTravel.png"
import modernui from "../img/modernui.png"
import soundTrap from "../img/soundTrap.png"
// Project images for phone
import menaraTravelMobile from "../img/menaraTravel-mobile.png"
import modernuiMobile from "../img/modernui-mobile.png"
import soundTrapMobile from "../img/soundtrap-mobile.png"

import { BsArrowRight } from "react-icons/bs"

const Projects = () => {
  return (
    <React.Fragment>
      <section className='projects my-container'>
        {/* <img className='title-wave' src={titleWave} alt='Title wave' /> */}
        <div className='header'>
          <h1 data-aos='fade-left'>Featured works.</h1>
        </div>
        <div className='projects-container'>
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <div className='btn-container'>
          <Link exact to='/portfolio' className='btn' data-aos='fade-right'>
            <span>View more</span>
            <BsArrowRight />
          </Link>
        </div>
      </section>
    </React.Fragment>
  )
}

const storageText =
  "Online storage applications are a good solution for companies to store and share data, in this project I converted the main page of storage app to an actual react application, I used React and bootstrap for this project."
const storageAppDescription = (
  <span>
    {storageText} <br />
    <a
      target='_blank'
      href='https://dribbble.com/shots/7198575-File-Manager/attachments/195651?mode=media'
      rel='noopener noreferrer'>
      Click here to view ui design
    </a>
  </span>
)

const projects = [
  {
    id: 1,
    title: "Storage App",
    miniImage: modernui,
    mainImage: modernui,
    mobileImage: modernuiMobile,
    url: "https://storage-ui.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/Test-Front-END",
    description:
      "Online storage applications are a good solution for companies to store and share data, in this project I converted the main page of storage app to an actual react application, I used React and bootstrap for this project.",
  },
  {
    id: 2,
    title: "Menara Travels",
    miniImage: menaraTravel,
    mainImage: menaraTravel,
    mobileImage: menaraTravelMobile,
    url: "https://menara.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/Travel-Agency",
    description:
      "Travel agencies provide conveyance, accommodation and entertainment for individuals and groups scheduling trips, so I created frontend side for travel agency website using React, React router, HTML and CSS",
  },
  {
    id: 3,
    title: "Sound Trap",
    miniImage: soundTrap,
    mainImage: soundTrap,
    mobileImage: soundTrapMobile,
    url: "https://soundtrap.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/Music-Landing-Page",
    description:
      "I Created clone landing page for SoundTrap website using HTML CSS flexbox grid and JavaScript, this landing page is compatible for all types of devices and screens",
  },
]

export default Projects
