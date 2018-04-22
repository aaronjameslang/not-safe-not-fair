import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { withTheme } from 'material-ui/styles'

export default () => (
  <$Div id='header'>
    <span>&#9776;</span>
    <Link to='/'><h1>Not Safe Not Fair</h1></Link>
    <span className='user-icon'>JS</span>
  </$Div>
)

const colour = props => props.theme.palette.primary.main
const colourContrast = props => props.theme.palette.primary.contrastText

const $Div = withTheme()(styled.div`
  align-items: center;
  background-color: ${colour};
  color: ${colourContrast};
  display: flex;
  justify-content: space-between;
  padding: 1em;
  h1 {
    margin: 0;
  }
  a {
    color: ${colourContrast};
    text-decoration: none;
  }
`)
