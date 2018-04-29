const jwt = require('jsonwebtoken')

export default (req, cb) => {
  const header = req.header('authorization')
  if (!header) {
    cb({name: 'NoTokenError', message: 'missing auth token'})
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
