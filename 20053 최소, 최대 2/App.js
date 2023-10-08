let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const T = input.shift();

for (let i = 0; i < T; i++) {
  let N = input.shift();
  let min = 1000000;
  let max = -1000000;
  let num = input.shift().split(' ').map(Number);
  for (let j = 0; j < N; j++) {
    if (min > num[j]) {
      min = num[j];
    }
    if (max < num[j]) {
      max = num[j];
    }
  }
  console.log(min, max);
}
