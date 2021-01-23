import React from 'react'
import logo from './logo.svg'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import Portfolio from './portfolio/Portfolio'
import About from './about/About'
import GetInTouch from './getInTouch/GetInTouch'
import './styles/Navbar.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/about' component={About} />
        <Route exact path='/getintouch' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
