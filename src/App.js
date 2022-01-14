import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./home/Home"
import Portfolio from "./portfolio/Portfolio"
import About from "./about/About"
import Contact from "./contact/Contact"
import Footer from "./components/Footer"
import "./App.css"
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  Aos.init({ duration: 1000 })
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
