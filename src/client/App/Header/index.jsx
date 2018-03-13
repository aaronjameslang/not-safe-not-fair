import React from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './style.scss'

class Header extends React.Component {
  // ☰
  render() {
    return (
      <div id="header">
        <span>&#9776;</span>
        <Link to="/"><h1>Not Safe Not Fair</h1></Link>
        <span>&#9776;</span>
      </div>
    )
  }
}

module.exports = Header
