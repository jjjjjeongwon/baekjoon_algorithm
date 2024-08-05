const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);

for (let i = 0; i < N; i++) {
  let line = "";
  if (i % 2 === 0) {
    line += "* ".repeat(N).trim();
  } else {
    line += " ".repeat(1) + "* ".repeat(N).trim();
  }
  console.log(line);
}
