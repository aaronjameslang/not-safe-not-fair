import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import styled from 'styled-components'
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import { getReportReasons } from '../../api'

export default () => (
  <$form>
    <ReasonSelect label='I wish to report:' />
    <Select value={0} floatingLabelText='Location:'>
      <MenuItem value="1,1" >Current Location (12'34'' 89'67'')</MenuItem>
      <MenuItem value="2,2" >Tommies</MenuItem>
      <MenuItem value="3,3" >BRI</MenuItem>
    </Select>
    <TextField hintText='Details' />
    <Button variant='raised' color='primary'>Cancel</Button>
    <Button variant='raised' color='primary'>Report</Button>
  </$form>
)

const $form = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;
`

class ReasonSelect extends React.Component {
  constructor () {
    super()
    this.state = {
      reasons: []
    }
    getReportReasons().then(
      reasons => {
        this.setState({reasons})
      }
    )
  }
  render () {
    return (
      <Select value={0} {...this.props}>
        { this.state.reasons.map(reason => <MenuItem value={reason.name} >{reason.label}</MenuItem>)}
      </Select>
    )
  }
}

