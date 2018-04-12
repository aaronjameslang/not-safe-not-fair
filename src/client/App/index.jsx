import React from 'react'
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CssBaseline from 'material-ui/CssBaseline'
import { withTheme } from 'material-ui/styles'

import Header from './Header'
import Page from './Page'
import theme from '../theme'

const themeFontFamily = props => props.theme.typography.fontFamily

export default() => (
  <$Div className='app'>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <Header />
      <Page />
    </MuiThemeProvider>
  </$Div>
)

const $Div = withTheme()(styled.div`
  font-family: ${themeFontFamily};
`)
