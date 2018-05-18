import pool from './pool'

export const existsWhereEmailAddressEquals = emailAddress =>
  pool.query(`
    SELECT 1
      FROM "user"
     WHERE email_address = $1
     LIMIT 1
  `, [emailAddress]
  ).then(({rows}) => !!rows.length)

export const insert = (id, emailAddress) =>
  pool.rows(`
    INSERT INTO "user" (id, email_address)
    VALUES ($1, $2)
        ON CONFLICT DO NOTHING
  `, [ id, emailAddress ])
