/* global window */

import { Auth0LockPasswordless } from 'auth0-lock'
import theme from './theme'

let lock

const newLock = () => new Auth0LockPasswordless('P4VNlmrVpFkOTfi2xM7tNoED9V9o2CAv', 'notsafenotfair.eu.auth0.com', {
  auth: {
    redirectUrl: window.location.origin,
    responseType: 'token id_token'
  },
  passwordlessMethod: 'link',
  theme: {
    primaryColor: theme.palette.primary.main
  }
})

const getLock = () => {
  if (!lock) {
    lock = newLock()
    lock.on('authenticated', function ({idToken}) {
      window.localStorage.setItem('token', idToken)
    })
  }
  return lock
}

export default () => getLock().show()

export const getToken = () => window.localStorage.getItem('token')
