import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import * as theme from '../../theme'

export default () => (
  <$Div id='header'>
    <span>&#9776;</span>
    <Link to='/'><h1>Not Safe Not Fair</h1></Link>
    <span className='user-icon'>JS</span>
  </$Div>
)

const $Div = styled.div`
  align-items: center;
  background-color: ${theme.COLOUR_PRIMARY};
  color: ${theme.COLOUR_WHITE};
  display: flex;
  justify-content: space-between;
  padding: 1em;
  h1 {
    margin: 0;
  }
  a {
    color: ${theme.COLOUR_WHITE};
    text-decoration: none;
  }
`
