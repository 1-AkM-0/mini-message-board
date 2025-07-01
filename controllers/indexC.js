const db = require("../db/queries");

async function getMessages(req, res) {
  try {
    const messages = await db.getMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages });
  } catch (e) {
    console.log("Database error", e);
    res.status(500).send({ error: "Internal server error" });
  }
}

module.exports = { getMessages };
