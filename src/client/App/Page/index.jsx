import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'
import ReportNewPage from './ReportNewPage'
import ReportPage from './ReportPage'

export default () => (
  <div>
    <Switch>
      <Route path='/report/new' component={ReportNewPage} />
      <Route path='/report/:id?' component={ReportPage} />
      <Route component={HomePage} />
    </Switch>
  </div>
)
