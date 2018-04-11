import Button from 'muicss/lib/react/button'
import Option from 'muicss/lib/react/option'
import React from 'react'
import Select from 'muicss/lib/react/select'
import Textarea from 'muicss/lib/react/textarea'
import styled from 'styled-components'

import { getReportReasons } from '../../api'

export default () => (
  <$form>
    <ReasonSelect label='I wish to report:' />
    <Select label='Location:'>
      <Option value="1,1" label="Current Location (12'34'' 89'67'')" />
      <Option value="2,2" label="St. Thomas' Hospital" />
      <Option value="3,3" label='Waterloo Infirmary' />
    </Select>
    <Textarea placeholder='Details' />
    <Button variant='raised' color='primary'>Cancel</Button>
    <Button variant='raised' color='primary'>Report</Button>
  </$form>
)

const $form = styled.form`
  padding: 1em;
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
      <Select {...this.props}>
        { this.state.reasons.map(reason => <Option value={reason.name} label={reason.label} />)}
      </Select>
    )
  }
}

