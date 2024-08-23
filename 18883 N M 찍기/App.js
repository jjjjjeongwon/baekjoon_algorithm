const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const N = parseInt(input[0]);
const M = parseInt(input[1]);
let result = "";

for (let i = 1; i <= N * M; i++) {
  result += i;
  if (i % M === 0) {
    result += "\n";
  } else {
    result += " ";
  }
}

console.log(result.trim());
