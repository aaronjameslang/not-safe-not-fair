import React from 'react'
import ReactDOM from "react-dom"

import './style'
import App from './App'

const eApp = document.createElement('div');
eApp.id = 'app'
document.body.appendChild(eApp);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
