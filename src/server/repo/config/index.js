import pool from '../pool'

export const selectReason = () => pool.rows('SELECT * FROM report_reason')

export const selectOutcode = (x, y) =>
  pool.rows(`
    SELECT *
      FROM configuration.outcode
     ORDER BY position <-> point($1, $2)
  `, [x, y])

export const selectLocation = term =>
  pool.rows(`
    SELECT *, l.code
      FROM configuration.location AS l
      JOIN configuration.outcode  AS o
        ON l.outcode = o.code
     WHERE l.name LIKE $1
     -- ORDER BY position <-> point($2, $3)
     LIMIT 100
  `, [`%${term.toUpperCase()}%`])
