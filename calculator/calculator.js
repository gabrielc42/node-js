//jshint esversion:6


const express = require("express");

const calculator = express();

calculator.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

calculator.listen(3000, function () {
  console.log("Server started on port 3000");
});