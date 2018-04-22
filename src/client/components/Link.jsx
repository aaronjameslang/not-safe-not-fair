import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

export default withStyles({
  root: {
    color: 'unset',
    textDecoration: 'unset'
  }
})((props) => (
  <Link className={props.classes.root} {...props} />
))
