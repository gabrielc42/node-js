//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");

const calculator = express();

calculator.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

calculator.post("/", function (req, res) {
  res.send("Thanks for posting that!");
});

calculator.listen(3000, function () {
  console.log("Server started on port 3000");
});