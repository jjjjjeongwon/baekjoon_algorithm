const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = parseInt(input[0]);
const operator1 = input[1];
const B = parseInt(input[2]);
const operator2 = input[3];
const C = parseInt(input[4]);

function operate(a, op, b) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return Math.floor(a / b);
}

const result1 = operate(operate(A, operator1, B), operator2, C);
const result2 = operate(A, operator1, operate(B, operator2, C));

console.log(Math.min(result1, result2));
console.log(Math.max(result1, result2));
