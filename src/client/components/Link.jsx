import Link from 'react-router-dom/Link'
import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

export default withStyles({
  root: {
    color: 'unset',
    textDecoration: 'unset'
  }
})((props) => (
  <Link className={props.classes.root} {...props} />
))
