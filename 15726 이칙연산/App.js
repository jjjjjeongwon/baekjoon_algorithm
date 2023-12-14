let input = require("fs")
  .readFileSync(__dirname + "/input.txt", {
    encoding: "utf-8",
  })
  .split("\n")[0]
  .split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
let sum = parseInt((a * b) / c);
let sum1 = parseInt((a / b) * c);
console.log(Math.max(sum, sum1));
