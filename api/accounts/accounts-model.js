const db = require("../../data/db-config");

const getAll = () => {
  return db("accounts");
};

const getById = (id) => {
  return db("accounts").where({ id: id }).first();
};

const create = async (account) => {
  const [id] = await db("accounts").insert(account);
  const newPost = await getById(id);
  return newPost;
};

const updateById = async (id, account) => {
  await db("accounts").where({ id: id }).update(account);
  const updatedAccount = await getById(id);
  // console.log("updated account --> ", updatedAccount);
  return updatedAccount;
};

const deleteById = async (id) => {
  return db("accounts").where({ id: id }).del();
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
