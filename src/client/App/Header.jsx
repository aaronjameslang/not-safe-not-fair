import AccountCircle from '@material-ui/icons/AccountCircle'
import AppBar from 'material-ui/AppBar'
import Link from '../components/Link'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'

export default withStyles({
  flat: {
    boxShadow: 'unset'
  },
  row: {
    display: 'flex',
    'justifyContent': 'space-between'
  }
})(({classes}) => (
  <AppBar className={classes.flat} position='static'>
    <Toolbar className={classes.row} >
      <MenuIcon />
      <Link to='/'>
        <Typography variant='title' color='inherit'>
        Not Safe Not Fair
        </Typography>
      </Link>
      <AccountCircle />
    </Toolbar>
  </AppBar>
))
