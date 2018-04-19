import Button from 'material-ui/Button'
import Input, { InputLabel } from 'material-ui/Input'
import React from 'react'
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'
import { FormControl } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'
import { find, propEq } from 'ramda'

import { getLocations, getReportReasons } from '../../api'
import AutoComplete from '../../components/AutoComplete'

export default class extends React.Component {
  render () {
    return (
      <$form>
        <ReasonSelect onChange={reason => this.setState({reason})} />
        <LocationInput onChange={locationCode => this.setState({locationCode})} />
        <TextField />
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
    this.onChange = ::this.onChange
    getReportReasons().then(
      reasons => {
        this.setState({reasons})
      }
    )
  }
  onChange (event) {
    const { value } = event.target
    this.setState({value})
    this.props.onChange(value)
  }
  render () {
    const ReasonMenuItem = reason =>
      <MenuItem key={reason.name} value={reason.name}>{reason.label}</MenuItem>
    const ReasonMenuItems = reasons => 
      <React.Fragment>{reasons.map(ReasonMenuItem)}</React.Fragment>
    const findReason = name => find(propEq('name', name), this.state.reasons)
    const ReasonMenuItemsN = names => ReasonMenuItems(names.map(findReason))
    return (
      <FormControl>
        <InputLabel htmlFor={this.id}>I wish to report:</InputLabel>
        <Select
          inputProps={{id: this.id}}
          multiple
          onChange={this.onChange}
          renderValue={ReasonMenuItemsN}
          value={this.state.value}
        >
          { this.state.reasons.map(ReasonMenuItem)}
        </Select>
      </FormControl>
    )
  }
}

class LocationInput extends React.Component {
  constructor () {
    super()
    this.state = { value: '' }
    this.onChange = ::this.onChange
  }
  onChange (value) {
    this.setState({value})
    this.props.onChange(value)
  }
  loadOptions (input, callback) {
    const toOption = l => ({ value: l.code, label: l.name })
    const toOptions = ls => ls.map(toOption)
    getLocations(input)
      .then(toOptions)
      .then(options => {
        callback(null, {options})
      })
  }
  render () {
    return (
      <Input
        fullWidth
        placeholder='Location:'
        inputComponent={AutoComplete}
        value={this.state.value}
        onChange={this.onChange}

        inputProps={{
          loadOptions: this.loadOptions,
          simpleValue: true
        }}
      />
    )
  }
}
