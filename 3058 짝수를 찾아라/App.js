const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const testCases = parseInt(input[0], 10);

  for (let i = 1; i <= testCases; i++) {
    const numbers = input[i].split(" ").map(Number);
    const evens = numbers.filter((num) => num % 2 === 0);
    const sum = evens.reduce((acc, curr) => acc + curr, 0);
    const min = Math.min(...evens);
    console.log(sum, min);
  }
});
