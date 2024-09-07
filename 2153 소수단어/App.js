const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function charToNum(char) {
  const charCode = char.charCodeAt(0);
  if (char >= "a" && char <= "z") {
    return charCode - "a".charCodeAt(0) + 1;
  } else if (char >= "A" && char <= "Z") {
    return charCode - "A".charCodeAt(0) + 27;
  }
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += charToNum(input[i]);
}

if (isPrime(sum)) {
  console.log("It is a prime word.");
} else {
  console.log("It is not a prime word.");
}
