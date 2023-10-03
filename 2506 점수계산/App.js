let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const N = Number(input[0]);
const OX = input[1].split(' ').map(Number);

let answer = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  if (OX[i]) {
    answer += 1;
  } else {
    answer = 0;
  }
  sum += answer;
}

console.log(sum);
