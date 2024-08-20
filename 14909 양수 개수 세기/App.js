const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input = line;
  rl.close();
});

rl.on("close", () => {
  const numbers = input.split(" ").map(Number);

  const positiveCount = numbers.filter((num) => num > 0).length;

  console.log(positiveCount);
});
