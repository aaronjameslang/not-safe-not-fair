import * as repo from '../../repo/config'

export default api => {
  api.get('/report/reason', repo.selectReason)

  api.get('/outcode', ({ queryStringParameters: {x, y} }) => repo.selectOutcode(x, y))

  api.get('/location', ({ queryStringParameters: {name} }) => repo.selectLocation(name))
}
