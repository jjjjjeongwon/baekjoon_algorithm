let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const [K, N] = input.shift().split(' ').map(Number);
const lines = input.map(Number).sort((a, b) => a - b);

let min = 1;
let max = lines[lines.length - 1];

while (min <= max) {
  let mid = Math.floor((min + max) / 2);

  let countLines = lines.reduce((acc, cur) => {
    return acc + Math.floor(cur / mid);
  }, 0);

  if (countLines >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
