import React from 'react'
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CssBaseline from 'material-ui/CssBaseline'
import { withTheme } from 'material-ui/styles'
import { HashRouter as Router } from 'react-router-dom'

import Header from './Header'
import Page from './Page'
import theme from '../theme'

const themeFontFamily = props => props.theme.typography.fontFamily

export default() => (
  <$Div className='app'>
    <CssBaseline />
    <Router>
      <MuiThemeProvider theme={theme}>
        <Header />
        <Page />
      </MuiThemeProvider>
    </Router>
  </$Div>
)

const $Div = withTheme()(styled.div`
  font-family: ${themeFontFamily};
`)
