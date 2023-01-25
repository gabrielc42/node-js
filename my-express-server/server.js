//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response) {
  response.send("<h1>hiya</h1>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
