let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const T = input.shift();

for (let i = 0; i < T; i++) {
  let ans = 0;
  let numbers = input[i].split(' ').map(Number);
  for (let j = 0; j < numbers.length; j++) {
    ans += numbers[j];
  }
  console.log(ans);
}
