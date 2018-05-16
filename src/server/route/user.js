import auth from '../services/auth'
export default api => {
  api.get('/user', ({ headers }) => auth(headers))
}
