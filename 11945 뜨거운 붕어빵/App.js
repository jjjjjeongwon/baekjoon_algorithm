let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let [N, M] = input.shift().split(' ').map(Number);

let answer = '';

for (let i = 0; i < N; i++) {
  for (let j = M - 1; j >= 0; j--) {
    answer += input[i][j];
  }
  answer += '\n';
}

console.log(answer);
