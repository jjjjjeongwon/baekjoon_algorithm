const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let baskets = Array(n).fill(0);

for (let idx = 1; idx <= m; idx++) {
  const [i, j, k] = input[idx].split(" ").map(Number);
  for (let x = i - 1; x < j; x++) {
    baskets[x] = k;
  }
}

console.log(baskets.join(" "));
