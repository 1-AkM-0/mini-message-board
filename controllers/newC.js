const db = require("../db/queries");

async function createMessage(req, res) {
  const { text, username } = req.body;
  try {
    await db.createMessage(username, text);
  } catch (e) {
    console.log("Database error:", e);
    res.status(500).send({ error: "Internal server error" });
  }
  res.redirect("/");
}

const getForm = (req, res) => {
  res.render("form");
};

module.exports = { createMessage, getForm };
