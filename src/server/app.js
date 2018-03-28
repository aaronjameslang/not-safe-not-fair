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

module.exports = app
