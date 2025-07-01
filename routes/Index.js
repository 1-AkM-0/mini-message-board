const { Router } = require("express");
const indexController = require("../controllers/indexC");

const indexRouter = Router();

indexRouter.get("/", indexController.getMessages);

module.exports = indexRouter;
