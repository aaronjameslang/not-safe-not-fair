import React from 'react'
import T from 'material-ui/Typography'
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
      <Location location={props.locationName} />
    </div>
    <Reasons reasons={props.reasons} />
    <Comment comment={props.comment} />
  </div>
))

const Ago = ({timestamp}) => <T title={timestamp}>{timeAgo(timestamp)}</T>
const timeAgo = timestamp => distanceInWordsStrict(Date.now(), new Date(timestamp), {addSuffix: true})
const Location = withStyles({
  location: { textTransform: 'capitalize' }
})(
  ({classes, location}) => <T className={classes.location}>{location.toLowerCase()}</T>
)
const Reasons = ({reasons}) => <ul><T>Just because</T></ul>
// const Reason = reason => <li key={reason}>{reason}</li>

const Comment = withStyles(theme => ({
  bq: {
    '&::before': {
      color: theme.palette.primary.main,
      content: '"\\201C"',
      fontSize: '2em',
      lineHeight: 0,
      verticalAlign: '-0.25em'
    }
  }
}))(
  ({classes, comment}) => <T component='blockquote' className={classes.bq}>{comment}</T>
)
