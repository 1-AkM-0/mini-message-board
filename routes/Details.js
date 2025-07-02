const { Router } = require("express");
const detailsC = require("../controllers/detailsC");

const detailsRouter = Router();

detailsRouter.get("/:detailsId", detailsC.getDetails);

module.exports = detailsRouter;
