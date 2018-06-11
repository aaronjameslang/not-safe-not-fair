import { Pool } from 'pg'
import cck from 'camelcase-keys'
const pool = Object.create(new Pool())
pool.rows = (...args) => pool.query(...args).then(x => x.rows).then(cck)
pool.row = (...args) => pool.rows(...args).then(x => x[0])
export default pool
