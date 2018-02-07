import React from 'react'
import ReactDOM from "react-dom"

import './style.scss'

class Header extends React.Component {
  // ☰
  render() {
    return (
      <div id="header">
        <span>&#9776;</span>
        <span><h1>Not Safe Not Fair</h1></span>
        <span>&#9776;</span>
      </div>
    )
  }
}

module.exports = Header
