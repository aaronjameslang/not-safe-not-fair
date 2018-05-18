import { Pool } from 'pg'
const pool = Object.create(new Pool())
pool.rows = (...args) => pool.query(...args).then(x => x.rows)
export default pool
