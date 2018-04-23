import React from 'react'
import classnames from 'classnames'
import withStyles from 'material-ui/styles/withStyles'

export default ({results, Result}) => (
  <div>
    <List results={results || []} Result={Result} />
    <Count results={results} />
  </div>
)

const List = withStyles(theme => ({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& > li:nth-child(even)': {
      backgroundColor: theme.palette.primary.tint
    }
  }
}))(({classes, results, Result}) =>
  <ul className={classes.list}>{results.map(ListItem(Result))}</ul>
)
const ListItem = Result => result =>
  <li key={result.id}><Result {...result} /></li>

const Count = withStyles({
  count: {
    padding: '1em',
    textAlign: 'center'
  },
  '@keyframes hellip': {
    from: { width: 0 },
    to: { width: '1.25em' }
  },
  hellip: {
    '&::after': {
      animation: 'hellip steps(100, end) 1s infinite',
      content: '"\\2026"',
      display: 'inline-block',
      overflow: 'hidden',
      verticalAlign: 'bottom'
    }
  }
})(({classes, results}) => (
  <div className={classnames(classes.count, {[classes.hellip]: !results})} >
    {results ? results.length : 'Loading'} results
  </div>
))
