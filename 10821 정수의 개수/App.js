const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const numbers = input.split(" ");
console.log(numbers.length);
