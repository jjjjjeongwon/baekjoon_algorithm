const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);

let result = "";

for (let i = 1; i <= N; i++) {
  let line = "";

  for (let j = 0; j < N - i; j++) {
    line += " ";
  }

  line += "*";

  if (i > 1) {
    for (let j = 0; j < 2 * (i - 1) - 1; j++) {
      line += " ";
    }
    line += "*";
  }

  result += line + "\n";
}

console.log(result);
