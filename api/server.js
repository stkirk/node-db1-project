const express = require("express");
const accountsRouter = require("./accounts/accounts-router");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountsRouter);

//root endpoint - welcome message
server.get("/", (req, res) => {
  res.send(`
      <h2>Accounts API</h2>
      <p>use: /api/accounts</p>
    `);
});

//Catchall endpoint
server.use("*", (req, res, next) => {
  console.log(`hitting ${req.method} ${req.baseUrl}`);
  next({ status: 404, message: "not found" });
});

//error handling middleware
server.use((err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json({ message: `Something went wrong: ${err.status} ${err.message}` });
});

module.exports = server;
