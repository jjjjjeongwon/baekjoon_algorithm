let input = require("fs")
  .readFileSync(__dirname + "/input.txt", {
    encoding: "utf-8",
  })
  .split("\n");

let ballPosition = 1;

const M = parseInt(input[0]);

for (let i = 1; i <= M; i++) {
  const [X, Y] = input[i].split(" ").map(Number);

  if (ballPosition === X) {
    ballPosition = Y;
  } else if (ballPosition === Y) {
    ballPosition = X;
  }
}

console.log(ballPosition);
