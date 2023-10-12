let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0]
  .split(' ')
  .map(Number);

const len = input.length;

let answer = 0;

for (let i = 0; i < len; i++) {
  answer += input[i];
}

console.log(answer);
