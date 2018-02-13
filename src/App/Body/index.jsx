import React from 'react'
import Button from 'muicss/lib/react/button';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Textarea from 'muicss/lib/react/textarea';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import './style'

class Header extends React.Component {
  render () {
    return (
      <div id="body">
        <div>Welcome, jane.smith</div>
        <Switch>
          <Route path="/report" component={ReportForm} />
          <Route                component={Dashboard}  />
        </Switch>
      </div>
    )
  }
}

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <table>
          Hello
        </table>
        <Link to="/report">Report</Link>
      </div>
    )
  }
}

class ReportForm extends React.Component {
  render () {
    return (
      <form>
        <Select label="I wish to report:">
          <Option label="short staffing" />
          <Option label="missed teaching" />
        </Select>
        <Select label="Location:">
          <Option label="Current Location (12'34'' 89'67'')" />
          <Option label="St. Thomas' Hospital" />
          <Option label="Waterloo Infiramry" />
        </Select>
        <Textarea placeholder="Details" />
        <Button variant="raised" color="primary">Cancel</Button>
        <Button variant="raised" color="primary">Report</Button>
      </form>
    )
  }
}

module.exports = Header
