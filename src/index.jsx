import React from 'react'
import ReactDOM from "react-dom"

import './style'
import App from './App'

console.log(
  'Version %s built %s',
  notsafenotfair.build.commithash +
  (notsafenotfair.build.dirty ? '+' : ''),
  Date(notsafenotfair.build.time).toString()
)

const eApp = document.createElement('div');
eApp.id = 'app'
document.body.appendChild(eApp);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
