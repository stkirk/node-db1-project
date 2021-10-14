const express = require("express");
// const router = require("express").Router();
const Accounts = require("./accounts-model");
const {
  checkAccountId,
  checkAccountPayload,
  checkAccountNameUnique,
} = require("./accounts-middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
  Accounts.getAll()
    .then((accounts) => {
      res.status(200).json(accounts);
    })
    .catch(next);
});

router.get("/:id", checkAccountId, (req, res, next) => {
  res.status(200).json(req.account);
});

router.post(
  "/",
  checkAccountPayload,
  checkAccountNameUnique,
  (req, res, next) => {
    Accounts.create({
      name: req.body.name.trim(),
      budget: req.body.budget,
    })
      .then((newAccount) => {
        res.status(201).json(newAccount);
      })
      .catch(next);
  }
);

router.put("/:id", checkAccountId, checkAccountPayload, (req, res, next) => {
  Accounts.updateById(req.params.id, {
    name: req.body.name.trim(),
    budget: req.body.budget,
  })
    .then((updatedAccount) => {
      res.status(200).json(updatedAccount);
    })
    .catch(next);
});

router.delete("/:id", checkAccountId, (req, res, next) => {
  Accounts.deleteById(req.params.id)
    .then((deletedAccount) => {
      res.status(200).json(deletedAccount);
    })
    .catch(next);
});

// router.use((err, req, res, next) => {
//   // eslint-disable-line
//   // DO YOUR MAGIC
// });

module.exports = router;
