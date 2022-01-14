import React from "react"
import { Link } from "react-router-dom"
import Project from "../components/Project"
import covidTracker from "../img/covidtracker.png"
import dolla from "../img/dolla.png"
import menaraTravel from "../img/menaraTravel.png"
import modernui from "../img/modernui.png"
import soundTrap from "../img/soundTrap.png"
import wildfiremap from "../img/wildfiremap.png"

const Projects = () => {
  return (
    <React.Fragment>
      {/* <ProjectModal project={selectedProject} /> */}
      <section className='projects'>
        <div className='projects-container'>
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <div className='btn-container'>
          <Link exact to='/contact' className='btn'>
            Get In Touch
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
  {
    id: 4,
    title: "Wildfires Map",
    miniImage: wildfiremap,
    mainImage: wildfiremap,
    url: "https://wildfire-map.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/wildfire-map",
    description:
      "In this project i created a Wildfire map for tracking wildfires around the world using Google Maps and Nasa API",
  },
  {
    id: 5,
    title: "Covid Tracker",
    miniImage: covidTracker,
    mainImage: covidTracker,
    url: "https://covid-tracker-khaldi.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/Corona-Tracker",
    description:
      "I developed a covid tracker using React, Chart js and React count up to show the current status of pandamic and virus spreading in the world",
  },
  {
    id: 6,
    title: "Dolla Website",
    miniImage: dolla,
    mainImage: dolla,
    url: "https://dolla-landing.netlify.app/",
    sourceCode: "https://github.com/devkhaldi/Dolla",
    description:
      "To increase my coding skills, i built a responsive banking landing page using Html Css and Bootstrap.",
  },
]

export default Projects
