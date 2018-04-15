import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import ReportNewPage from './ReportNewPage'
import ReportPage from './ReportPage'

export default () => (
  <div>
    <Switch>
      <Route path='/report/new' component={ReportNewPage} />
      <Route path='/report/:id?' component={ReportPage} />
      <Route component={Dashboard} />
    </Switch>
  </div>
)

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <Link to='/report'>Report</Link>
      </div>
    )
  }
}
