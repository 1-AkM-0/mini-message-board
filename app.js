const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/Index");
const newRouter = require("./routes/newRouter");
const detailsRouter = require("./routes/detailsRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/details", detailsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Mini message board - listening on port ${PORT}`);
});
