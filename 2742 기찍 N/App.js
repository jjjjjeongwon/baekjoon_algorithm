let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0];

const N = Number(input);

let answer = '';

for (let i = N; i > 0; i--) {
  answer += i + '\n';
}

console.log(answer);
