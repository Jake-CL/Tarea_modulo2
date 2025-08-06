/*const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.POSTGRESDB_USER,
  host: process.env.POSTGRESDB_HOST,
  database: process.env.POSTGRESDB_DATABASE,
  password: process.env.POSTGRESDB_PASS,
  port: process.env.POSTGRESDB_LOCAL_PORT,
});
module.exports = pool;
*/
import pg from 'pg';
const { Pool } = pg;

export const connectPostgress = new Pool({
  user: process.env.POSTGRESDB_USER,
  host: process.env.POSTGRESDB_HOST,
  database: process.env.POSTGRESDB_DATABASE,
  password: process.env.POSTGRESDB_PASS,
  port: process.env.POSTGRESDB_LOCAL_PORT,
});