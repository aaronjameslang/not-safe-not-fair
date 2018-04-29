const uuidv5 = require('uuid/v5')

const NAMESPACE = 'F975FC06-AE71-4780-AF97-3CC393CA5C97'
export default emailAddress =>
  uuidv5(emailAddress.toLowerCase(), NAMESPACE)
