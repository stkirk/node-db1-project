const router = require("express").Router();
const Posts = require("./accounts-model");

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  Posts.getAll()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
});

module.exports = router;
