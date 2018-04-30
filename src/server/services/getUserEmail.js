const jwt = require('jsonwebtoken')

class NoTokenError extends Error {}

export default req => {
  const header = req.header('authorization')
  if (!header) {
    throw new NoTokenError()
  }
  const token = header.split(' ').pop()
  const key = require('../../../jwks').keys[0].pem
  const verified = jwt.verify(
    token,
    key,
    {algorithms: ['RS256']}
  )
  return verified.email
}
