export default class extends Error {
  constructor (httpStatusCode = 500, ...args) {
    super(...args)
    this.httpStatusCode = httpStatusCode
  }
}
