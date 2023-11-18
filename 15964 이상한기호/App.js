let input = require("fs")
  .readFileSync(__dirname + "/input.txt", {
    encoding: "utf-8",
  })
  .split("\n")[0]
  .split(" ")
  .map(Number);

const [A, B] = input;

console.log((A + B) * (A - B));
