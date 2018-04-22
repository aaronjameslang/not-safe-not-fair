import CssBaseline from 'material-ui/CssBaseline'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import Page from './Page'
import theme from '../services/theme'

export default() => (
  <div className='app'>
    <CssBaseline />
    <Router>
      <MuiThemeProvider theme={theme}>
        <Header />
        <Page />
        <Footer />
      </MuiThemeProvider>
    </Router>
  </div>
)
