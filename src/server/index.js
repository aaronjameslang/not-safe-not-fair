import ApiBuilder from 'claudia-api-builder'
import route from './route'

const api = new ApiBuilder({requestFormat: 'AWS_PROXY'})
route(api)
exports.handler = api.proxyRouter
