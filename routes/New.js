const { Router } = require("express");
const newController = require("../controllers/newC");

const newRouter = Router();

newRouter.get("/", newController.getForm);

newRouter.post("/", newController.createMessage);

module.exports = newRouter;
