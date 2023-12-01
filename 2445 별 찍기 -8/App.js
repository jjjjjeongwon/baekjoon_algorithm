let input = require("fs")
  .readFileSync(__dirname + "/input.txt", {
    encoding: "utf-8",
  })
  .split("\n")[0];

let star = "*".repeat(Number(input) * 2).split("");
let start = Number(input) - 1;
let end = Number(input);
let result1;
let result2 = [];

for (let i = 0; i < Number(input); i++) {
  result2.push(star.join(""));
  star[start] = " ";
  star[end] = " ";
  start--;
  end++;
}
result1 = result2.slice().reverse().slice(0, -1);

console.log(result1.concat(result2).join("\n"));
