const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const decimal = parseInt(input, 16);

console.log(decimal);
