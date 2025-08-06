const { Pool } = require('pg');

const connectPG = new Pool({
  connectionString: process.env.POSTGRES_URI,
});

module.exports = connectPG;
