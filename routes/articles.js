const express = require("express");
const Article = require("../models/article");

const router = express.Router();
function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article
    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
  try {
    article = await article.save();
    res.redirect(`/articles/${article.slug}`);
  } catch (e) {
    res.render(`articles/${path}`, { article: article });
  }
}}

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

router.get("/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render("articles/edit", { article: article });
})

router.get("/:slug", async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  res.render("articles/show", { article: article });
});

router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

router.put("/:id", async (req, res, next) => {
  req.article = await Article.findById(req.params.id);
  next()
}, saveArticleAndRedirect("edit"));

router.post("/", async (req, res, next) => {
 req.article = new Article();
 next();
}, saveArticleAndRedirect("new"));



module.exports = router;
