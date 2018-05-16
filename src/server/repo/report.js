import pool from './pool'

export const insert = ({ userId, locationCode, comment, reasons}) =>
  pool.query(`
    INSERT INTO report (user_id, location_code, comment)
    VALUES ($1, $2, $3)
  `, [ userId, locationCode, comment ])

export const select = () =>
  pool.rows(`
    SELECT *, l.name AS location_name
      FROM report
      JOIN configuration.location AS l
        ON report.location_code = l.code
     ORDER BY report.ctime DESC
     LIMIT 1000
  `)
