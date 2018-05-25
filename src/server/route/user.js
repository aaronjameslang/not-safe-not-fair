import auth from '../services/auth'
export default api => {
  api.get('/user', ({ headers }) => auth(headers).catch(errorHandler(api)))
}

const errorHandler = api => error => {
  console.log(error)
  return new api.ApiResponse(error.message, {}, error.httpStatusCode || 500)
}
