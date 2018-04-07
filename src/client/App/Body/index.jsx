import React from 'react'
import Button from 'muicss/lib/react/button';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Textarea from 'muicss/lib/react/textarea';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import ReportPage from './Report'

import './style'

class Body extends React.Component {
  render () {
    return (
      <div id="body">
        <div>Welcome, jane.smith</div>
        <Switch>
          <Route path="/report/new"  component={ReportForm} />
          <Route path="/report/:id?" component={ReportPage} />
          <Route                     component={Dashboard}  />
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
  constructor () {
    super()
    this.loadReportReasons()
    this.state = {
      reasons: []
    }
  }

  loadReportReasons () {
    fetch('/report/reason').then(res => res.json()).then(
      reasons => {
        console.log(reasons)
        this.setState({reasons})
      }
    )
  }

  render () {
    return (
      <form>
        <Select label="I wish to report:">
          { this.state.reasons.map(reason => <Option value={reason.name} label={reason.label} />)}
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

module.exports = Body
