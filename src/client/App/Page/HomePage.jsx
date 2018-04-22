import React from 'react'
import Typography from 'material-ui/Typography'
import {withStyles} from 'material-ui'

export default withStyles({
  space: {
    margin: '1em'
  }
})(({classes}) => (
  <div>
    <Typography className={classes.space}>
          NotSafeNotFair.org is an application for doctors in the NHS to report unsafe conditions at work, in order to highlight scale of unsafe staffing according to medical professionals
    </Typography>
    <Typography className={classes.space}>
          Disclaimer: This website and application is designed as a quick and anonymous reporting system for doctors to highlight safety concerns related to their working conditions. Please do not mention any patient or colleague identifiable information. This is not a space for incident reporting or exception reporting and these should still be completed as instructed using the policies of your trust. This is designed as a very rapid reporting tool that can provide a nationwide picture of unsafe working conditions within the NHS.
    </Typography>
  </div>
))
