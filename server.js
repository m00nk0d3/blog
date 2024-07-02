const express = require("express");
const app = express();
app.listen(5500);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
