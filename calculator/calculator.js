//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");

const calculator = express();

calculator.use(bodyParser.urlencoded({ extended: true }));

calculator.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

calculator.post("/", function (req, res) {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

calculator.get('/bmiCalculator', function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

calculator.post("/bmiCalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);
  res.send("BMI calculated: " + bmi);
});

calculator.listen(3000, function () {
  console.log("Server started on port 3000");
});