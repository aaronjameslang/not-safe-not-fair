const fs = require('fs')
const jtp = require('jwk-to-pem')

const keys = require('./jwks.json').keys.map(jwk => {
  jwk.pem = jtp(jwk)
  return jwk
})

fs.writeFileSync('../jwks.json', JSON.stringify({keys}, null, 2))
