import React from 'react'
import styled, { keyframes } from 'styled-components'

import * as api from '../../api'
import * as theme from '../../theme'

class BodyReport extends React.Component {
  componentWillMount () {
    this.state = {}
  }
  componentDidMount () {
    const id = this.props.match.params.id
    api.getReports(id).then(reports => this.setState({reports}))
  }
  get className() {
    return [
      this.props.className,
      this.isLoading?'loading':null
    ].join(' ')
  }
  get isLoading() {
    return !this.state.reports
  }
  render () { return (
    <div className={this.className}>
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

const kf = keyframes`to { width: 1.25em; }`

export default styled(BodyReport)`
  &.loading {
    cursor: wait

    .count:after {
      animation: ${kf} steps(100, end) 1s infinite;
      content: "\\2026";
      display: inline-block;
      overflow: hidden;
      vertical-align: bottom;
      width: 0;
    }
  }

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

    li:nth-child(even) {
      background-color: ${theme.COLOUR_PRIMARY_PALE};
    }
 }
`
