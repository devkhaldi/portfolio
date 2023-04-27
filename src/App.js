import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Portfolio from "./portfolio/Portfolio"
import About from "./about/About"
import Contact from "./contact/Contact"
import Footer from "./components/Footer"
import "./App.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    AOS.init({
      once: "true",
      duration: "1000",
    })
  }, [])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
