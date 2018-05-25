import ClaudiaApiBuilder from 'claudia-api-builder'
import { HttpError } from 'http-errors'

export default (...args) => {
  const capi = new ClaudiaApiBuilder(...args)
  const api = Object.create(capi)

  const onError = error => {
    console.log(error)
    return new api.ApiResponse(error.message, {}, error.httpStatusCode || 500)
  }

  const wrap = method => {
    api[method] = (path, handler, ...args1) =>
      capi[method].call(
        api,
        path,
        (...args2) => handler(...args2).catch(onError),
        ...args1
      )
  }

  [
    'delete',
    'get',
    'post',
    'put'
  ].forEach(wrap)

  return api
}
