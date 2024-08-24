const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

let sum = 0;
let result = 1;

for (let i = a; i <= b; i++) {
  sum += i;
}

for (let i = 1; i <= sum; i++) {
  result *= i;
}

console.log(result);
