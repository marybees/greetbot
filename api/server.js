const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ hello: "Web 34" });
});

module.exports = server;
