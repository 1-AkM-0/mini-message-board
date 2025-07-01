const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: "localhost",
  user: `${process.env.USERNAME}`,
  database: "message_board",
  password: `${process.env.DATABASE_PASSWORD}`,
  port: 5432,
});
