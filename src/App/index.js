import React from 'react'

import './style'

import Header from './Header'
import Body from './Body'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Body/>
      </React.Fragment>
    )
  }
}

module.exports = App
