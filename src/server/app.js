const express = require('express')
const app = express()

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
  const { Client } = require('pg')
  const client = new Client()
  console.log('connecting to db')
  client.connect().then(() => {
  console.log('querying')
    return client.query('SELECT * FROM report_reason')
  }).then(result => {
    console.log(result.rows)
    client.end()
    res.end()
  })
})

module.exports = app
