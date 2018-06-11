import auth from '../services/auth'
import * as report from '../repo/report'
import * as user from '../repo/user'
import Joi from 'joi'

const schema = Joi.object().keys({
  locationCode: Joi.string().min(3).max(5).required(),
  comment: Joi.string().required()
})

const errorHandler = api => error => {
  console.log(error)
  return new api.ApiResponse(error.message, {}, error.httpStatusCode || 500)
}

export default api => {
  api.get('/report', report.select)

  api.post('/report', ({ body, headers }) => {
    let userId
    if (body) body = JSON.parse(body)
    const { error } = schema.validate(body)
    if (error) throw error
    return auth(headers)
      .then(({ id, emailAddress }) => {
        userId = id
        return user.insert(id, emailAddress)
      })
      .then(() => report.insert({ ...body, userId }))
      .catch(errorHandler(api))
  }, { success: { code: 201 } }
  )
}
