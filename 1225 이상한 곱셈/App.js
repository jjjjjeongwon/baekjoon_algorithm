const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = input[0];
const B = input[1];

let result = 0;

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < B.length; j++) {
    result += parseInt(A[i]) * parseInt(B[j]);
  }
}

console.log(result);
