const { Pool } = require("pg");
require("dotenv").config();

let pool;

if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  pool = new Pool({
    host: "localhost",
    user: process.env.DB_USER,
    database: "message_board",
    password: process.env.DB_PASSWORD,
    port: 5432,
  });
}

module.exports = pool;
