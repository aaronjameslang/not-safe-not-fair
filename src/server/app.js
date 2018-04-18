const express = require('express')
const app = express()

const { Pool } = require('pg')
const pool = new Pool()

app.use(express.static('static'))
app.use(express.json())

app.get('/report', (req, res) => {
  pool.query('SELECT * FROM report LIMIT 1000')
    .then(result => {
      res.json(result.rows)
    })
})

app.post('/report', (req, res) => {
  console.log(req.body)
  res.end()
})

app.get('/report/reason', (req, res) => { // : void
  pool.query('SELECT * FROM report_reason')
    .then(result => {
      res.json(result.rows)
    })
})

const rowsToJson = res => ({rows}) => res.json(rows)

app.get('/outcode', (req, res) => {
  const { x, y } = req.query
  const sql = `
    SELECT *
      FROM configuration.outcode
     ORDER BY position <-> point(${x}, ${y})
  `
  pool.query(sql).then(rowsToJson(res))
})

app.get('/location', (req, res) => {
  const { x, y } = req.query
  const sql = `
    SELECT *
      FROM configuration.location AS l
      JOIN configuration.outcode  AS o
        ON l.outcode = o.code
     ORDER BY position <-> point(${x}, ${y})
     LIMIT 100
  `
  pool.query(sql).then(rowsToJson(res))
})

module.exports = app
