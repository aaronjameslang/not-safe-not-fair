import auth from '../services/auth'
import * as report from '../repo/report'
import * as user from '../repo/user'

const errorHandler = api => error => {
  console.log(error)
  return new api.ApiResponse(error.message, {}, error.httpStatusCode || 500)
}

export default api => {
  api.get('/report', report.select)

  api.post('/report', ({ body, headers }) => {
    let userId
    return auth(headers)
      .then(({ id, emailAddress }) => {
        userId = id
        return user.insert(id, emailAddress)
      })
      .then(() => report.insert({ ...body, userId }))
      .catch(errorHandler(api))
  })
}
