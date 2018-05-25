import ApiBuilder from './ApiBuilder'
import route from './route'

const api = new ApiBuilder({requestFormat: 'AWS_PROXY'})
route(api)
exports.handler = api.proxyRouter
