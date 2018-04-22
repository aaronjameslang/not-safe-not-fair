/* global notsafenotfair:false */

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

console.log(
  'Version %s built %s',
  notsafenotfair.build.commithash +
  (notsafenotfair.build.dirty ? '+' : ''),
  Date(notsafenotfair.build.time).toString()
)

const app = document.createElement('div')
document.body.appendChild(app);

([document.documentElement, document.body, app]).forEach(e => { e.style.height = '100%' })

ReactDOM.render(React.createElement(App), app)
