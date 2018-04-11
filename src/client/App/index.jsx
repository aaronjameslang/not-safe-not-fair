import React from 'react'
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CssBaseline from 'material-ui/CssBaseline';

import Header from './Header'
import Page from './Page'
import { FONT_FAMILY } from '../theme'

export default () => (
  <$Div className='app'>
    <CssBaseline />
    <MuiThemeProvider>
    <Header />
    <Page />
    </MuiThemeProvider>
  </$Div>
)

const $Div = styled.div`
  font-family: ${FONT_FAMILY};
`
