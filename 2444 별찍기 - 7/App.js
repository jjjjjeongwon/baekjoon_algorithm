let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n")[0];

let start = 0;
let end = input * 2 - 2;

let result1;
let result2 = [];

let star = "*".repeat(input * 2 - 1).split("");

for (let i = 0; i < input; i++) {
  result2.push(star.join(""));
  star[start] = " ";
  star[end] = "";
  start++;
  end--;
}

result1 = result2.slice().reverse().slice(0, -1);

console.log(result1.concat(result2).join("\n"));
