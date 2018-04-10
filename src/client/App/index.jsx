import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './style'

import Header from './Header'
import Page from './Page'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Page />
      </React.Fragment>
    )
  }
}

module.exports = App
