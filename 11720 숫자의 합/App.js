let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

let N = Number(input[0]);
let numList = input[1].split('').map(Number);

let answer = 0;

for (let i = 0; i < N; i++) {
  answer += numList[i];
}

console.log(answer);
