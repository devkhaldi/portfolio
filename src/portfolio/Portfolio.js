import React, { useEffect } from "react"
import Hero from "./Hero"
import Projects from "./Projects"

const Portfolio = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])
  return (
    <React.Fragment>
      <Hero />
      <Projects />
    </React.Fragment>
  )
}

export default Portfolio
