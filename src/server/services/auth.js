import * as user from '../repo/user'
import Error from '../Error'
import emailIsNhs from '../../common/emailIsNhs'
import jwt from 'jsonwebtoken'
import uuidv5 from 'uuid/v5'

const NAMESPACE = 'F975FC06-AE71-4780-AF97-3CC393CA5C97'

const calcUserId = emailAddress =>
  uuidv5(emailAddress.toLowerCase(), NAMESPACE)

export const authenticate = ({ authorization }) => {
  if (!authorization) {
    throw new Error(401)
  }
  const token = authorization.split(' ').pop()
  const key = require('../../../jwks').keys[0].pem
  const verified = jwt.verify(
    token,
    key,
    {algorithms: ['RS256']}
  )
  return {
    emailAddress: verified.email,
    id: calcUserId(verified.email)
  }
}

export const authorise = emailAddress => {
  const isNhs = emailIsNhs(emailAddress)
  if (isNhs) return
  return user.existsWhereEmailAddressEquals(emailAddress)
    .then(exists => {
      if (exists) return
      throw new Error(403)
    })
}

export default headers => {
  const user = authenticate(headers)
  return authorise(user.emailAddress)
    .then(() => user)
}
