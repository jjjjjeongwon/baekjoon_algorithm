const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

if (N > 0 && (N & (N - 1)) === 0) {
  console.log(1);
} else {
  console.log(0);
}
