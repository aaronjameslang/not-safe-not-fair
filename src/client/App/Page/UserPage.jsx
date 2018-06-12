import Button from '@material-ui/core/Button'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { decode } from 'jsonwebtoken'
import { getToken, removeToken, showLock } from '../../services/auth'
import { getUser } from '../../services/api'

const expToStr = exp => String(new Date(exp * 1000))

export default class extends React.Component {
  render () {
    const token = getToken()
    if (!token) {
      return (
        <Column>
          <Typography>You are not logged in</Typography>
          <LoginButton />
        </Column>
      )
    }
    const { email, exp } = decode(token)
    if (Date.now() > exp * 1000) {
      return (
        <Column>
          <Typography>Your log-in expired on {expToStr(exp)}</Typography>
          <LoginButton />
        </Column>
      )
    }
    return (
      <Column>
        <Typography>You are logged in as {email}</Typography>
        <Typography>Your log-in will expire on {expToStr(exp)}</Typography>
        <UserIdNotice />
        <LogoutButton onClick={() => removeToken() && this.forceUpdate()} />
      </Column>
    )
  }
}

const Column = withStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: '1em',
      textAlign: 'center'
    }
  }
})(({children, classes}) =>
  <div children={children} className={classes.root} />)

class UserIdNotice extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  componentDidMount () {
    getUser()
      .then(::this.setState)
      .catch(() => this.setState({id: 'ERROR'}))
  }
  render () {
    return this.state.id
      ? <Typography>Your user ID is {this.state.id}</Typography>
      : <Typography>Verifying ID...</Typography>
  }
}

const LoginButton = () =>
  <Button size='large' color='primary' onClick={showLock} variant='raised'>Login</Button>

const LogoutButton = ({onClick}) =>
  <Button size='large' color='primary' onClick={onClick} variant='flat'>Logout</Button>
