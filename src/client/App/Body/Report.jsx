import React from 'react'
import * as api from '../../api'
import styled from 'styled-components'
import * as theme from '../../theme'

class BodyReport extends React.Component {
  componentWillMount () {
    this.state = {}
  }
  componentDidMount () {
    const id = this.props.match.params.id
    api.getReports(id).then(reports => this.setState({reports}))
  }
  render () { return (
    <div className={this.props.className}>
      <ReportList reports={this.state.reports||[]} />
      <div class="count">
        {this.state.reports?this.state.reports.length:'Loading'} results
      </div>
    </div>
  )}
}

const ReportList = ({reports}) =>
  <ul>{reports.map(ReportListItem)}</ul>

const ReportListItem = (report) =>
  <li><Report report={report} key={report.id} /></li>

const Report = ({report}) =>
  report.comment

export default styled(BodyReport)`
  .count {
    padding: 1em;
    text-align: center;
  }

  > ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 1em;
    }

    li:nth-child(odd) {
      background-color: ${theme.COLOUR_PRIMARY_PALE};
    }
 }
`
