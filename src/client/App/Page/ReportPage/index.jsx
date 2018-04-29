import React from 'react'

import { getReports } from '../../../services/api'
import ResultList from './ResultList'
import Report from './Report'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    const id = this.props.match.params.id
    getReports(id).then(reports => this.setState({reports}))
  }
  render () {
    return (
      <ResultList Result={Report} results={this.state.reports} />
    )
  }
}
