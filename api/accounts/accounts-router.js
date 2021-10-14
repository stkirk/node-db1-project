const express = require("express");
// const router = require("express").Router();
const Accounts = require("./accounts-model");
const { checkAccountId } = require("./accounts-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.getAll()
    .then((accounts) => {
      res.status(200).json(accounts);
    })
    .catch(next);
});

router.get("/:id", checkAccountId, (req, res, next) => {
  res.status(200).json(req.account);
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

// router.use((err, req, res, next) => {
//   // eslint-disable-line
//   // DO YOUR MAGIC
// });

module.exports = router;
