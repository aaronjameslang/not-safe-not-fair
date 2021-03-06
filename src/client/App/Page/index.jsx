import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import withStyles from '@material-ui/core/styles/withStyles'

import HomePage from './HomePage'
import ReportNewPage from './ReportNewPage'
import ReportPage from './ReportPage'
import UserPage from './UserPage'

export default withStyles({
  page: {
    flexGrow: 1,
    flexShrink: 1,
    height: 0,
    overflow: 'auto'
  }
})(({classes}) => (
  <div className={classes.page}>
    <Switch>
      <Route path='/user' component={UserPage} />
      <Route path='/report/new' component={ReportNewPage} />
      <Route path='/report/:id?' component={ReportPage} />
      <Route component={HomePage} />
    </Switch>
  </div>
))
