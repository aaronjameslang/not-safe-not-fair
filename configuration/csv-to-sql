#! env node

const csv = require('csv')
const fs = require('fs')

const csvFile = fs.createReadStream('etrust.csv')
const sqlFile = fs.createWriteStream('etrust.sql')

let row = 1

const transformer = record => {
  const header = 'INSERT INTO configuration.location (code, name, address, postcode) VALUES\n'

  let str = ''

  if (row === 1) {
    str += header
    row += 1
  } else if (row % 1000 === 0) {
    str += ';\n'
    str += header
    row += 2
  } else {
    str += ',\n'
    row += 1
  }

  const escape = x => x.split("'").join("''")
  const quote = x => "'" + x + "'"
  const fields = [
    record[0], // id
    record[1], // name
    record[4], // address
    record[9], // postcode
  ].map(escape).map(quote).join(', ')

  str += `(${fields})`

  return str
}

csvFile
  .pipe(csv.parse())
  .pipe(csv.transform(transformer))
  .pipe(sqlFile, {end:false})

csvFile.on('end', () => { sqlFile.end(';\n') })

