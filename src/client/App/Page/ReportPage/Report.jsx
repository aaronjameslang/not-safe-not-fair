import React from 'react'
import styled from 'styled-components'

export default (props) => (
  <$Div className='report'>
    <Row><Ago timestamp={props.ctime} /><Position {...props.position} /></Row>
    <Reasons reasons={props.reasons} />
    <Comment comment={props.comment} />
  </$Div>
)

const $Div = styled.div`
  display: flex;
  flex-direction: column
  padding: 1em;
`
const Row = styled.div`
  display: flex;
  flex-direction: row
  justify-content: space-between;
`

const Ago = ({timestamp}) => <div title={timestamp}>5s ago</div>
const Position = ({x, y}) => <div>{x}, {y}</div>
const Reasons = ({reasons}) => <ul>reasons</ul>
const Reason = reason => <li key={reason}>{reason}</li>
const Comment = ({comment}) => <blockquote>{comment}</blockquote>
