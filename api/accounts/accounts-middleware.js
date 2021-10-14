const Accounts = require("./accounts-model");

const checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkAccountId = (req, res, next) => {
  console.log("Verifying account id...");
  const { id } = req.params;
  Accounts.getById(id)
    .then((account) => {
      if (account) {
        req.account = account;
        next();
      } else {
        next({ status: 404, message: "account not found" });
      }
    })
    .catch(next);
};

module.exports = {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
};
