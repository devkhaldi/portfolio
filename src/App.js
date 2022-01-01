import React from "react"
import logo from "./logo.svg"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./home/Home"
import Portfolio from "./portfolio/Portfolio"
import About from "./about/About"
import Contact from "./contact/Contact"
import Footer from "./components/Footer"
import "./App.css"
import { AOS } from "aos"

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
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
