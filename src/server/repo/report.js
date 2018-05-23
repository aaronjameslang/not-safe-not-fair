import pool from './pool'

export const insert = ({ userId, locationCode, comment }) =>
  pool.row(`
    INSERT INTO report (user_id, location_code, comment)
    VALUES ($1, $2, $3)
 RETURNING id
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

export const deleet = id =>
  pool.query(`
      DELETE FROM report
       WHERE id = $1
    `, [id])
