let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

let N, M;
[N, M] = [input[0].split(' ')[0], input[0].split(' ')[1]];

let answer = 0;
let cardArr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let addValue = cardArr[i] + cardArr[j] + cardArr[k];
      if (M - addValue >= 0 && addValue > answer) {
        answer = addValue;
      }
    }
  }
}

console.log(answer);
