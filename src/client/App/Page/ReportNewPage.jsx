import Button from 'material-ui/Button'
import { find, propEq } from 'ramda'
import React from 'react'
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu'

import { getReportReasons } from '../../api'

export default class extends React.Component {
  render () {
    return (
      <$form>
        <ReasonSelect onChange={reason => this.setState({reason})} />
        <Select value={0} floatingLabelText='Location:'>
          <MenuItem value='1,1' >Current Location (12'34'' 89'67'')</MenuItem>
          <MenuItem value='2,2' >Tommies</MenuItem>
          <MenuItem value='3,3' >BRI</MenuItem>
        </Select>
        <TextField hintText='Details' />
        <Button variant='raised' color='primary'>Cancel</Button>
        <Button variant='raised' color='primary'>Report</Button>
      </$form>
    )
  }
}
const $form = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;
`

class ReasonSelect extends React.Component {
  constructor () {
    super()
    this.id = Math.random()
    this.state = {
      reasons: [],
      value: []
    }
    getReportReasons().then(
      reasons => {
        this.setState({reasons})
      }
    )
  }
  nameToLabel (name) {
      return find(propEq('name', name))(this.state.reasons).label
  }
  onChange (event) {
      const { value } = event.target
    this.setState({value})
    this.props.onChange(value)
  }
  render () {
    return (
      <FormControl>
        <InputLabel htmlFor={this.id}>I wish to report:</InputLabel>
        <Select
          multiple
          inputProps={{id: this.id}}
          onChange={::this.onChange}
          value={this.state.value}
            renderValue={value => (
                <React.Fragment>
                    {value.map(value => <MenuItem key={value}>{this.nameToLabel(value)}</MenuItem>)}
                </React.Fragment>
            )}
        >
          { this.state.reasons.map(reason => <MenuItem value={reason.name} >{reason.label}</MenuItem>)}
        </Select>
      </FormControl>
    )
  }
}
