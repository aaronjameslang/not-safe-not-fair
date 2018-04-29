const jwt = require('jsonwebtoken')

class NoTokenError extends Error {}

export default (req, cb) => {
  const header = req.header('authorization')
  if (!header) {
    cb(new NoTokenError())
    return
  }
  const token = header.split(' ').pop()
  const key = require('../../../jwks').keys[0].pem
  jwt.verify(
    token,
    key,
    {algorithms: ['RS256']},
    (error, verified) => cb(error, verified && verified.email)
  )
}
