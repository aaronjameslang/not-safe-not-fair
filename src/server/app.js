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

module.exports = app
