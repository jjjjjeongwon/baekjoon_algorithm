const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  let line = " ".repeat(N - i);
  for (let j = 0; j < i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}
