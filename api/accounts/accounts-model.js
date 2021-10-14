const db = require("../../data/db-config");

const getAll = () => {
  return db("accounts");
};

const getById = (id) => {
  return db("accounts").where({ id: id }).first();
};

const create = async ({ name, budget }) => {
  const [id] = await db("accounts").insert({ name, budget });
  const newPost = await getById(id);
  return newPost;
};

const updateById = async (id, { name, budget }) => {
  await db("accounts").where({ id: id }).update({ name, budget });
  const updatedAccount = await getById(id);
  // console.log("updated account --> ", updatedAccount);
  return updatedAccount;
};

const deleteById = async (id) => {
  const deletedAccount = await getById(id);
  await db("accounts").where({ id: id }).del();
  return deletedAccount;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
