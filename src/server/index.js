import api from './api'
import route from './route'

route(api)
exports.handler = api.proxyRouter
