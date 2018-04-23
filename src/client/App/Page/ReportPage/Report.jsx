import React from 'react'
import distanceInWordsStrict from 'date-fns/distance_in_words_strict'
import withStyles from 'material-ui/styles/withStyles'

export default withStyles({
  column: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})((props) => (
  <div className={'report ' + props.classes.column}>
    <div className={props.classes.row}>
      <Ago timestamp={props.ctime} />
      <Location location={props.location_name} />
    </div>
    <Reasons reasons={props.reasons} />
    <Comment comment={props.comment} />
  </div>
))

const Ago = ({timestamp}) => <div title={timestamp}>{timeAgo(timestamp)}</div>
const timeAgo = timestamp => distanceInWordsStrict(Date.now(), new Date(timestamp), {addSuffix: true})
const Location = withStyles({
  location: { textTransform: 'capitalize' }
})(
  ({classes, location}) => <div className={classes.location}>{location.toLowerCase()}</div>
)
const Reasons = ({reasons}) => <ul>reasons</ul>
// const Reason = reason => <li key={reason}>{reason}</li>

const Comment = withStyles(theme => ({
  bq: {
    margin: 0,
    '&::before': {
      color: theme.palette.primary.main,
      content: '"\\201C"',
      fontSize: '2em',
      lineHeight: 0,
      verticalAlign: '-0.25em'
    }
  }
}))(
  ({classes, comment}) => <blockquote className={classes.bq}>{comment}</blockquote>
)
