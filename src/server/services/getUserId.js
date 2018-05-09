import calcUserId from './calcUserId'
import getUserEmail from './getUserEmail'

export default req => calcUserId(getUserEmail(req))
