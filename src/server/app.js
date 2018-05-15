import auth from './services/auth'
import express from 'express'
import pool from './repo/pool'

const app = express()

app.use(express.static('static'))
app.use(express.json())

const rowsToJson = res => ({rows}) => res.json(rows)

const onError = response => error => {
  console.log(error)
  response.status(error.httpStatusCode || 500).end()
}

app.get('/report', (req, res) => {
  pool.query(`
    SELECT *, l.name AS location_name
      FROM report
      JOIN configuration.location AS l
        ON report.location_code = l.code
     ORDER BY report.ctime DESC
     LIMIT 1000
  `).then(rowsToJson(res))
})

app.post('/report', (req, res) => {
  let userId
  auth(req)
    .then(user => {
      userId = user.id
      return pool.query(`
        INSERT INTO "user" (id, email_address)
        VALUES ($1, $2)
        ON CONFLICT DO NOTHING
      `, [
        user.id,
        user.emailAddress
      ])
    })
    .then(() =>
      pool.query(`
        INSERT INTO report (user_id, location_code, comment)
        VALUES ($1, $2, $3)
      `, [
        userId,
        req.body.locationCode,
        req.body.comment
      ])
    ).then(::res.json)
})

app.get('/user', (req, res) => {
  return auth(req).then(::res.json).catch(onError)
})

app.get('/report/reason', (req, res) => { // : void
  pool.query('SELECT * FROM report_reason')
    .then(result => {
      res.json(result.rows)
    })
})

app.get('/outcode', (req, res) => {
  const { x, y } = req.query
  const sql = `
    SELECT *
      FROM configuration.outcode
     ORDER BY position <-> point($1, $2)
  `
  pool.query(sql, [x, y]).then(rowsToJson(res))
})

app.get('/location', (req, res) => {
  const { name } = req.query
  const sql = `
    SELECT *, l.code
      FROM configuration.location AS l
      JOIN configuration.outcode  AS o
        ON l.outcode = o.code
     WHERE l.name LIKE $1
     -- ORDER BY position <-> point($2, $3)
     LIMIT 100
  `
  pool.query(sql, [`%${name.toUpperCase()}%`]).then(rowsToJson(res))
})

app.use((err, req, res, nxt) => onError(res)(err))

module.exports = app
