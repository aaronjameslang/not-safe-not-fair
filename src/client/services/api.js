/* global fetch:false */
import { getToken } from './auth'

const get = ([prefix], id, init = {}) =>
  fetch(prefix + (id || ''), init).then(res => res.json())

const getSecure = ([prefix], id) =>
  get([prefix], id, {
    headers: new Headers({
      Authorization: 'Bearer ' + getToken()
    })
  })

export const getLocations = name => get`/location?name=${name}`
export const getReportReasons = () => get`/report/reason`
export const getReports = () => get`/report`
export const getUser = () => getSecure`/user`
