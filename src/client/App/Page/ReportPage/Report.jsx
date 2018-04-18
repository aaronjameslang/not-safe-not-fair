import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { withTheme } from 'material-ui/styles'

export default (props) => (
  <$div className='report'>
    <Row>
      <Ago timestamp={props.ctime} />
      <Location location={props.location_name} />
    </Row>
    <Reasons reasons={props.reasons} />
    <Comment comment={props.comment} />
  </$div>
)

const $div = styled.div`
  display: flex;
  flex-direction: column
  padding: 1em;
`
const Row = styled.div`
  display: flex;
  flex-direction: row
  justify-content: space-between;
`

const Ago = ({timestamp}) => <div title={timestamp}>{moment(timestamp).fromNow()}</div>
const Location = ({location}) => <$location>{location.toLowerCase()}</$location>
const $location = styled.div`text-transform: capitalize`
const Reasons = ({reasons}) => <ul>reasons</ul>
// const Reason = reason => <li key={reason}>{reason}</li>

const Comment = ({comment}) => <$blockquote>{comment}</$blockquote>
const $blockquote = withTheme()(styled.blockquote`
  margin: 0;

  &::before {
    content: "\\201C";
    color: ${props => props.theme.palette.primary.main};
    vertical-align: -0.25em;
    line-height: 0;
    font-size: 2em;
  }
`)
