const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim(), 10);

let count = 1;
let n = input;

while (n !== 1) {
  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  count++;
}

console.log(count);
