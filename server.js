const express = require("express");
const articleRouter = require("./routes/articles");

const app = express();

app.listen(5500);

app.use("/articles", articleRouter);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const articles = [
    {
      title: "test",
      description: "test",
      markdown: "test",
      createdAt: new Date(),
    },
    {
      title: "test2",
      description: "test2",
      markdown: "test2",
      createdAt: new Date(),
    },
  ];
  res.render("index", { articles: articles });
});
