const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const N = input[0];
const B = parseInt(input[1], 10);

const decimalValue = parseInt(N, B);
console.log(decimalValue);
