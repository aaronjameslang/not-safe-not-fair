const express = require('express')
const app = express()

app.use(express.static('static'))

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

app.listen(8080, () => console.log('Listening on 8080'))
