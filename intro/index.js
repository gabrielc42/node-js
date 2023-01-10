//jshint esversion:6

console.log("We meet again world. Hi :D");
const fs  = require("fs");

fs.copyFileSync("file1.txt", "file2.txt");

const botanicZoo = require("botanic-zoo-api");
botanicZoo
  .getAnimalOfTheDay()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));