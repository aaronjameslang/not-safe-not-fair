import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import MyLocationIcon from '@material-ui/icons/MyLocation'
import React from 'react'

export default class extends React.Component {
  constructor () {
    super()
    this.onClick = ::this.onClick
    this.state = { watching: false }
    this.value = null
  }
  onChange (value) {
    this.value = value
    this.props.onChange(value)
  }
  onClick () {
    this.setState({watching: true})
  }
  get waiting () {
    return this.state.watching && !this.value
  }
  render () {
    return (
      <Button
        className='position-input'
        variant='fab'
        onClick={this.onClick}
      >
        <MyLocationIcon />
        {this.state.loading && <CircularProgress />}
      </Button>
    )
  }
}
