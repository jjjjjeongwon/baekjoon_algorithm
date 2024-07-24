const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  let line = "";

  for (let j = 0; j < N - i; j++) {
    line += " ";
  }

  for (let j = 0; j < 2 * i - 1; j++) {
    if (i === N) {
      line += "*";
    } else {
      if (j === 0 || j === 2 * i - 2) {
        line += "*";
      } else {
        line += " ";
      }
    }
  }

  console.log(line);
}
