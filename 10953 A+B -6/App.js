let input = require("fs")
  .readFileSync(__dirname + "/input.txt", {
    encoding: "utf-8",
  })
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(",");

  console.log(Number(numbers[0]) + Number(numbers[1]));
}
