import React from 'react'
import styled from 'styled-components'

export default (props) => (
  <Col className='report'>
    <Row><Ago timestamp={props.ctime} /><Position {...props.position} /></Row>
    <Reasons reasons={props.reasons} />
    <Comment comment={props.comment} />
  </Col>
)

const Col = styled.div`display: flex; flex-direction: column`
const Row = styled.div`display: flex; flex-direction: row`

const Ago = ({timestamp}) => <div title={timestamp}>5s ago</div>
const Position = ({x, y}) => <div>{x}, {y}</div>
const Reasons = ({reasons}) => <ul>Reasons</ul>
const Comment = ({comment}) => <blockquote>{comment}</blockquote>
