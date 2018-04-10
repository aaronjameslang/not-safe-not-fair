import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Page from './Page'
import { FONT_FAMILY } from '../theme'

export default () => (
  <$Div className='app'>
    <Header />
    <Page />
  </$Div>
)

const $Div = styled.div`
  font-family: ${FONT_FAMILY};
`
