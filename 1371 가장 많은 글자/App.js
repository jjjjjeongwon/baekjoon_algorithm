const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().replace(/\s/g, "");

let count = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  let charCode = input[i].charCodeAt(0) - 97;
  count[charCode]++;
}
let maxCount = Math.max(...count);

let result = "";
for (let i = 0; i < 26; i++) {
  if (count[i] === maxCount) {
    result += String.fromCharCode(i + 97);
  }
}

console.log(result);
