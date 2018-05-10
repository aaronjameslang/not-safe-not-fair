/* global window */

import { Auth0LockPasswordless } from 'auth0-lock'
import theme from './theme'

const TOKEN = 'token'

const lock = new Auth0LockPasswordless('P4VNlmrVpFkOTfi2xM7tNoED9V9o2CAv', 'notsafenotfair.eu.auth0.com', {
  auth: {
    redirectUrl: window.location.origin,
    responseType: 'token id_token'
  },
  passwordlessMethod: 'link',
  theme: {
    primaryColor: theme.palette.primary.main
  }
})

lock.on('authenticated', function ({idToken}) {
  window.localStorage.setItem(TOKEN, idToken)
})

export const showLock = ::lock.show

export const getToken = () => window.localStorage.getItem(TOKEN)
export const removeToken = () => window.localStorage.removeItem(TOKEN)
