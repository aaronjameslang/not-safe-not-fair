import React from 'react'
import { getUser } from '../../services/api'

export default class extends React.Component {
  componentDidMount () {
    getUser().then(::this.setState)
  }
  render () {
    return <pre>{JSON.stringify(this.state, null, 2)}</pre>
  }
}
