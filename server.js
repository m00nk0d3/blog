const express = require("express");
const articleRouter = require("./routes/articles");
const mongoose = require("mongoose");
const app = express();
const Article = require("./models/article");

app.listen(5500);

mongoose.connect("mongodb://localhost/blog");

app.use(express.urlencoded({ extended: false }));

app.use("/articles", articleRouter);

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const articles =  await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});
