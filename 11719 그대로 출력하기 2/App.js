const fs = require("fs");

let input = fs
  .readFileSync(__dirname + "/input.txt", {
    encoding: "utf-8",
  })
  .split("\n");

input.forEach((line) => console.log(line));
