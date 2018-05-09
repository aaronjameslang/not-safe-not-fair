/* global fetch */
import { getToken } from './auth'

const get = ([prefix], id, init = {}) => {
  return fetch(prefix + (id || ''), init).then(res => res.json())
}

const getSecure = ([prefix], id) =>
  get([prefix], id, {
    headers: { Authorization: 'Bearer ' + getToken() }
  })

const postSecure = ([prefix], id) => data =>
  get([prefix], id, {
    body: JSON.stringify(data),
    headers: {
      Authorization: 'Bearer ' + getToken(),
      'content-type': 'application/json'
    },
    method: 'POST'
  })

export const getLocations = name => get`/location?name=${name}`
export const getReportReasons = () => get`/report/reason`
export const getReports = () => get`/report`
export const getUser = () => getSecure`/user`
export const postReport = postSecure`/report`
