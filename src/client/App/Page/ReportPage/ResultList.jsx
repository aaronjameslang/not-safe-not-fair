import React from 'react'
import styled, { keyframes } from 'styled-components'

import * as theme from '../../../theme'

export default class ResultList extends React.Component {
  get className() {
    return [
      'result-list',
      this.props.className,
      this.props.results?'loading':null,
    ].join(' ')
  }
  render () { return (
    <Divx className={this.className}>
      <List results={this.props.results||[]} Result={this.props.Result} />
      <Count results={this.props.results} />
    </Divx>
  )}
}

const Divx = styled.div`
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li:nth-child(even) {
      background-color: ${theme.COLOUR_PRIMARY_PALE};
    }
 }
`

const List = ({results, Result}) =>
  <ul>{results.map(ListItem(Result))}</ul>
const ListItem = Result => result =>
  <li key={result.id}><Result {...result} /></li>

const Count = ({results}) => (
  <Ellipsising  className="count" disabled={!!results}>
    {results?results.length:'Loading'} results
  </Ellipsising>
)
const Ellipsising = styled.div`
  padding: 1em;
  text-align: center;

  &:after {
    animation: ${keyframes`to { width: 1.25em; }`} steps(100, end) 1s infinite;
    content: "\\2026";
    display: ${({disabled}) => disabled?'none':'inline-block'};
    overflow: hidden;
    vertical-align: bottom;
    width: 0;
  }
`
