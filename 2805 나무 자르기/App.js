let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const trees = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let min = 0;
let max = trees[trees.length - 1];

while (min <= max) {
  let mid = Math.floor((min + max) / 2);

  let totalLength = trees.reduce((acc, cur) => {
    if (cur - mid > 0) {
      return acc + (cur - mid);
    }
    return acc;
  }, 0);

  if (totalLength >= M) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);
