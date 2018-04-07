const get = ([prefix], id) =>
  fetch(prefix + (id || '')).then(res => res.json())

export const getReport = id => get`/report/{id}`
export const getReports = id => get`/report`
