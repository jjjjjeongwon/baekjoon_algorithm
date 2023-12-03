let input = require("fs")
  .readFileSync(__dirname + "/input.txt", {
    encoding: "utf-8",
  })
  .split("\n")[0];

for (let i = 1; i <= Number(input); i++) {
  console.log(" ".repeat(input - i) + "*".repeat(i));
}

for (let i = 1; i <= Number(input); i++) {
  console.log(" ".repeat(i) + "*".repeat(input - i));
}
