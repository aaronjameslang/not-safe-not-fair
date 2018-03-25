const express = require('express')
const app = express()

const { Pool } = require('pg')
const pool = new Pool()

app.use(express.static('static'))
app.use(express.json())

app.get('/report', (req, res) => {
  const reports = [{
    location: 'Sheffield',
    type: 'understaffed',
    details: 'blah blah blah'
  }, {
    location: 'St Thomas\'',
    type: 'missed teaching',
    details: 'blah blah blah bleeeh'
  }]
  res.send(reports)
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
