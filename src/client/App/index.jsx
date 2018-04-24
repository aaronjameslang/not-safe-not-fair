import CssBaseline from 'material-ui/CssBaseline'
import HashRouter from 'react-router-dom/HashRouter'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import withStyles from 'material-ui/styles/withStyles'

import Footer from './Footer'
import Header from './Header'
import Page from './Page'
import theme from '../services/theme'

export default withStyles({
  app: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column'
  }
})(({classes}) => (
  <div className={'app ' + classes.app}>
    <CssBaseline />
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <Header />
        <Page />
        <Footer />
      </MuiThemeProvider>
    </HashRouter>
  </div>
))
