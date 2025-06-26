const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const user = req.body.user;
  const message = req.body.message;
  const id = messages.length;
  console.log(id);

  messages.push({ id: id, text: message, user: user, added: new Date() });
  res.redirect("/");
});

indexRouter.get("/details/:detailsId", (req, res) => {
  const id = req.params.detailsId;
  res.render("details", { id: id, messages });
});

module.exports = indexRouter;
