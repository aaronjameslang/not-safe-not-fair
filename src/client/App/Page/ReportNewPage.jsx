import Button from 'material-ui/Button'
import FormControl from 'material-ui/Form/FormControl'
import Input from 'material-ui/Input'
import InputLabel from 'material-ui/Input/InputLabel'
import MenuItem from 'material-ui/Menu/MenuItem'
import React from 'react'
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField'
import find from 'ramda/es/find'
import propEq from 'ramda/es/propEq'
import withStyles from 'material-ui/styles/withStyles'

import AutoComplete from '../../components/AutoComplete'
import {
  getLocations,
  getReportReasons,
  postReport
} from '../../services/api'

export default withStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    '& > *': {
      padding: '1em'
    }
  }
})(class extends React.Component {
  render () {
    const {classes} = this.props
    return (
      <form className={classes.form}>
        <ReasonSelect onChange={reason => this.setState({reason})} />
        <LocationInput onChange={locationCode => this.setState({locationCode})} />
        <TextField
          label='Comment'
          onChange={event => { this.setState({comment: event.target.value}) }}
          multiline
        />
        <ButtonRow onCancel={() => window.history.back()} onSubmit={() => postReport(this.state)} />
      </form>
    )
  }
})

const ButtonRow = withStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})(({classes, onCancel, onSubmit}) => (
  <div className={classes.row}>
    <Button variant='flat' color='primary' onClick={onCancel}>Cancel</Button>
    <Button variant='raised' color='primary' onClick={onSubmit}>Report</Button>
  </div>
))

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
