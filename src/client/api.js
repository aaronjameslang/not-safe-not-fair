/* global fetch:false */

const get = ([prefix], id) =>
  fetch(prefix + (id || '')).then(res => res.json())

export const getReport = id => get`/report/{id}`
export const getReportReasons = () => get`/report/reason`
export const getReports = id => get`/report`
