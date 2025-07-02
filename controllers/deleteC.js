const db = require("../db/queries");

async function getDelete(req, res) {
  try {
    const id = req.params.id;
    await db.deleteUser(id);
    res.redirect("/");
  } catch (e) {
    console.log("Database error", e);
    res.status(500).send({ error: "Internal server error" });
  }
}

module.exports = {
  getDelete,
};
