const express = require("express");
const articleRouter = require("./routes/articles");

const app = express();

app.listen(5500);

app.use("/articles", articleRouter);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test article #1",
      description: "testing the description on article #1",
      createdAt: new Date(),
    },
    {
      title: "Test article #2",
      description: "this is the description on article #2",
      createdAt: new Date(),
    },
  ];
  res.render("articles/index", { articles: articles });
});
