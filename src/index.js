import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Change navbar height on scroll
window.onscroll = () => {
  const scrollTop = document.querySelector('html').scrollTop
  const navbar = document.querySelector('nav')
  if (scrollTop != 0) navbar.className = 'nav-on-scroll'
  else navbar.className = ''
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
