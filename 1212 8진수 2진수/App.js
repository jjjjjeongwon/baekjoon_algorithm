const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const binary = parseInt(input, 8).toString(2);

console.log(binary);
