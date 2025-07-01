const db = require("../db/queries");

async function getDetails(req, res) {
  try {
    const id = parseInt(req.params.detailsId);
    const message = await db.getDetails(id);
    console.log(message);
    res.render("details", { id: id, message: message });
  } catch (e) {
    console.log("Database error", e);
    res.status(500).send({ error: "Internal server error" });
  }
}

module.exports = { getDetails };
