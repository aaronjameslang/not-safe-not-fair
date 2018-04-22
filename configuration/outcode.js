#! env node

const csv = require('csv')
const fs = require('fs')
const { pipe } = require('ramda')

const csvFile = fs.createReadStream('outcode.csv')
const sqlFile = fs.createWriteStream('outcode.sql')

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
  const code = record[1]
  const x = Number(record[3])
  const y = Number(record[2])
  return (x || y) ? `('${code}', point(${x}, ${y}))` : false
}

const transformer = pipe(
  recordToStr,
  prependHeaderEtc('configuration.outcode')(['code', 'position'])
)

csvFile
  .pipe(csv.parse())
  .pipe(csv.transform(transformer))
  .on('end', () => { sqlFile.write(';\n') })
  .pipe(sqlFile)
