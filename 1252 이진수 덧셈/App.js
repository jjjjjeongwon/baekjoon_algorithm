const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let A = input[0];
let B = input[1];

let sum = BigInt("0b" + A) + BigInt("0b" + B);

let result = sum.toString(2);

console.log(result);
