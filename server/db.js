// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'perntodo',
//   password: 'zekobase',
//   port: 5432,
// })
// module.exports = pool

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'zekobase',
  database: 'perntodo',
  port: 5432,
})

module.exports = pool
