const Accounts = require("./accounts-model");
const db = require("../../data/db-config");

const checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body;
  const status = 400;
  if (!name || !budget) {
    next({ status, message: "name and budget are required" });
  } else if (typeof name !== "string") {
    next({ status, message: "name of account must be a string" });
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    next({ status, message: "name of account must be between 3 and 100" });
  } else if (typeof budget !== "number" || isNaN(budget)) {
    // isNan(value) evaluates to true if the value is Nan
    next({ status, message: "budget of account must be a number" });
  } else if (budget < 0 || budget > 1000000) {
    next({ status, message: "budget of account is too large or too small" });
  } else {
    next();
  }
};

const checkAccountNameUnique = (req, res, next) => {
  db("accounts")
    .where({ name: req.body.name.trim() })
    .first()
    .then((existingName) => {
      if (existingName) {
        next({ status: 400, message: "that name is taken" });
      } else {
        next();
      }
    })
    .catch(next);
};

const checkAccountId = (req, res, next) => {
  // console.log("Verifying account id...");
  const { id } = req.params;
  Accounts.getById(id)
    .then((account) => {
      if (!account) {
        next({ status: 404, message: "account not found" });
      } else {
        req.account = account;
        next();
      }
    })
    .catch(next);
};

module.exports = {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
};
