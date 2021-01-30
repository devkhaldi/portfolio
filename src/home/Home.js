import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <Footer />
    </React.Fragment>
  )
}

export default Home
