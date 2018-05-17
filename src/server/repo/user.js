import pool from './pool'

export const existsWhereEmailAddressEquals = emailAddress =>
  pool.query(`
      SELECT 1
        FROM "user"
        WHERE email_address = $1
        LIMIT 1
    `, [emailAddress])
    .then(({rows}) => !!rows.length)
