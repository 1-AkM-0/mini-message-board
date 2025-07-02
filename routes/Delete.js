const { Router } = require("express");
const deleteC = require("../controllers/deleteC");

const ddeleteRouter = Router();

ddeleteRouter.get("/:id", deleteC.getDelete);

module.exports = ddeleteRouter;
