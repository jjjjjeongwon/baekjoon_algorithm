let input = require("fs")
  .readFileSync(__dirname + "/input.txt", {
    encoding: "utf-8",
  })
  .split("\n")[0];

let number = Number(input);

result = "";
for (let i = 0; i < number; i++) {
  if (i !== 0) {
    result += "\n";
  }
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
}

for (let i = number; i > 1; i--) {
  if (i !== 1) {
    result += "\n";
  }
  for (let j = i; j > 1; j--) {
    result += "*";
  }
}

console.log(result);
