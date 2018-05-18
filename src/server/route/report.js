import auth from '../services/auth'
import * as report from '../repo/report'
import * as user from '../repo/user'

export default api => {
  api.get('/report', report.select)

  api.post('/report', ({ body, headers }) => {
    let userId
    auth(headers)
      .then(({ id, emailAddress }) => {
        userId = id
        return user.insert(id, emailAddress)
      })
      .then(() => report.insert({ ...body, userId }))
  })
}
