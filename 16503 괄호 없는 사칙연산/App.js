const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const tokens = line.split(" ");
  const a = parseInt(tokens[0]);
  const op1 = tokens[1];
  const b = parseInt(tokens[2]);
  const op2 = tokens[3];
  const c = parseInt(tokens[4]);

  let result1 = calculate(calculate(a, op1, b), op2, c);
  let result2 = calculate(a, op1, calculate(b, op2, c));

  console.log(Math.min(result1, result2));
  console.log(Math.max(result1, result2));

  rl.close();
});

function calculate(x, operator, y) {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return Math.floor(x / y);
  }
}
