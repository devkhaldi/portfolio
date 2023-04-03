import React from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App"

// Change navbar height on scroll
window.onscroll = () => {
  const scrollTop = document.querySelector("html").scrollTop
  const navbar = document.querySelector("nav")
  if (scrollTop !== 0) navbar.className = "nav-on-scroll"
  else navbar.className = ""
}

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)