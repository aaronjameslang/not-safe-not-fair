import React from 'react'
import * as api from '../../api'

export default class BodyReport extends React.Component {
  componentWillMount () {
    this.state = {}
  }
  componentDidMount () {
    const id = this.props.match.params.id
    api.getReports(id).then(reports => this.setState({reports}))
  }
  render () { return (
    <div>
      <p>{this.state.reports?this.state.reports.length:'Loading'} results</p>
      <ReportList reports={this.state.reports||[]} />
    </div>
  )}
}

const ReportList = ({reports}) =>
  <ul>{reports.map(ReportListItem)}</ul>

const ReportListItem = (report) =>
  <li><Report report={report} key={report.id} /></li>

const Report = ({report}) =>
  <p>{report.comment}</p>
