#! env node

const csv = require('csv')
const fs = require('fs')
const { pipe } = require('ramda')

const csvFile = fs.createReadStream('etrust.csv')
const sqlFile = fs.createWriteStream('etrust.sql')

let row = 1
const prependHeaderEtc = table => columns => recordStr => {
  if (!recordStr) return ''

  const header = `INSERT INTO ${table} (${columns.join(', ')}) VALUES\n`

  if (row === 1) {
    row += 1
    return header + recordStr
  } else if (row % 1000 === 0) {
    row += 2
    return ';\n' + header + recordStr
  } else {
    row += 1
    return ',\n' + recordStr
  }
}

const recordToStr = record => {
  const escape = x => x.split("'").join("''")
  const quote = x => "'" + x + "'"
  const fields = [
    record[0], // code
    record[1], // name
    record[4], // address
    record[9], // postcode
    record[9].split(' ')[0], // outcode
  ].map(escape).map(quote).join(', ')

  return `(${fields})`
}

const transformer = pipe(
  recordToStr,
  prependHeaderEtc('configuration.location')([
    'code',
    'name',
    'address',
    'postcode',
    'outcode',
  ])
)

csvFile
  .pipe(csv.parse())
  .pipe(csv.transform(transformer))
  .on('end', () => { sqlFile.write(';\n') })
  .pipe(sqlFile)

