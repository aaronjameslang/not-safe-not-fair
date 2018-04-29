const express = require('express')
const app = express()

const { Pool } = require('pg')
const pool = new Pool()

import calcUserId from './services/calcUserId'
import getUserEmail from './services/getUserEmail'

app.use(express.static('static'))
app.use(express.json())

const rowsToJson = res => ({rows}) => res.json(rows)

app.get('/report', (req, res) => {
  pool.query(`
    SELECT *, l.name AS location_name
      FROM report
      JOIN configuration.location AS l
        ON report.location_code = l.code
     LIMIT 1000
  `).then(rowsToJson(res))
})

app.post('/report', (req, res) => {
  console.log(req.body)
  res.end()
})

app.get('/user', (req, res) => {
  getUserEmail(req, (error, email) => {
    if (error) {
      res.status(401).json(error)
      return
    }
    res.json({
      email,
      id: calcUserId(email)
    })
  })
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
    SELECT *
      FROM configuration.location AS l
      JOIN configuration.outcode  AS o
        ON l.outcode = o.code
     WHERE l.name LIKE $1
     -- ORDER BY position <-> point($2, $3)
     LIMIT 100
  `
  pool.query(sql, [`%${name.toUpperCase()}%`]).then(rowsToJson(res))
})

module.exports = app
