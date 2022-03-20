import React from "react"
import { Link } from "react-router-dom"
import Project from "../components/Project"
import covidTracker from "../img/covidtracker.png"
import dolla from "../img/dolla.png"
import menaraTravel from "../img/menaraTravel.png"
import modernui from "../img/modernui.png"
import soundTrap from "../img/soundTrap.png"
import wildfiremap from "../img/wildfiremap.png"

// Project images for phone
import covidTrackerMobile from "../img/covidtracker-mobile.png"
import dollaMobile from "../img/dolla-mobile.png"
import menaraTravelMobile from "../img/menaraTravel-mobile.png"
import modernuiMobile from "../img/modernui-mobile.png"
import soundTrapMobile from "../img/soundtrap-mobile.png"
import wildfiremapMobile from "../img/wildfiremap-mobile.png"

import { BsArrowRight } from "react-icons/bs"

const Projects = () => {
  return (
    <React.Fragment>
      {/* <ProjectModal project={selectedProject} /> */}
      <section className='projects  my-container'>
        <div className='projects-container'>
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <div className='btn-container'>
          <Link exact to='/about' className='btn'>
            <span>About me</span>
            <BsArrowRight />
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

  {
    id: 4,
    title: "Covid Tracker",
    miniImage: covidTracker,
    mainImage: covidTracker,
    mobileImage: covidTrackerMobile,
    url: "https://covid-tracker-khaldi.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/Corona-Tracker",
    description:
      "I developed a covid tracker using React, Chart JS and React count up to show the current status of pandemic and virus spreading in the world",
  },
  {
    id: 5,
    title: "Wildfires Map",
    miniImage: wildfiremap,
    mainImage: wildfiremap,
    mobileImage: wildfiremapMobile,
    url: "https://wildfire-map.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/wildfire-map",
    description:
      "In this project, I created a Wildfire map for tracking wildfires around the world using Google Maps and NASA API",
  },
  {
    id: 6,
    title: "Dolla Website",
    miniImage: dolla,
    mainImage: dolla,
    mobileImage: dollaMobile,
    url: "https://dolla-landing.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/Dolla",
    description:
      "To increase my coding skills, I built a responsive banking landing page using HTML CSS and Bootstrap.",
  },
]

export default Projects
