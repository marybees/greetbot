const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({
    hello: "Web 34 from the web!",
    goodbye: "It's 2pm, lecture is over.",
    environment: process.env.NODE_ENV,
  });
});

module.exports = server;
