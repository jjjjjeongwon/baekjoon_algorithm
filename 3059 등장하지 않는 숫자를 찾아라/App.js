const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function missingAsciiSum(input) {
  const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let present = Array(26).fill(false);

  for (let i = 0; i < input.length; i++) {
    let charIndex = input.charCodeAt(i) - "A".charCodeAt(0);
    present[charIndex] = true;
  }

  let sum = 0;
  for (let i = 0; i < 26; i++) {
    if (!present[i]) {
      sum += "A".charCodeAt(0) + i;
    }
  }

  return sum;
}

console.log(missingAsciiSum(input));
