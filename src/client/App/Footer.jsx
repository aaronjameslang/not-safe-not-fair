import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'
import IconFindInPage from '@material-ui/icons/FindInPage'
import IconNoteAdd from '@material-ui/icons/NoteAdd'
import React from 'react'
import {withRouter} from 'react-router-dom'

export default withRouter(class extends React.Component {
  constructor () {
    super()
    this.onChange = ::this.onChange
    this.paths = ['/report', '/report/new']
    this.state = {value: 0}
  }
  onChange (event, value) {
    this.setState({value})
    this.props.history.push(this.paths[value])
  }
  render () {
    return (
      <BottomNavigation
        showLabels
        onChange={this.onChange}
        value={this.state.value}
      >
        <BottomNavigationAction label='View Reports' icon={<IconFindInPage />} />
        <BottomNavigationAction label='New Report' icon={<IconNoteAdd />} />
      </BottomNavigation>
    )
  }
})
