const pool = require("./pool");

async function createMessage(username, text) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [
    username,
    text,
  ]);
}

async function getMessages() {
  const { rows } = await pool.query("SELECT id, username, text FROM messages");
  return rows;
}

async function getDetails(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=($1)", [
    id,
  ]);
  return rows;
}

module.exports = {
  createMessage,
  getMessages,
  getDetails,
};
