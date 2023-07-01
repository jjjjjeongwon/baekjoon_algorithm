let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

let wordLength = input[0];
let word = input[1].split('').map(Number);

let answerArr = word.join('').split(NaN);
let answer = 0;

for (let i = 0; i < answerArr.length; i++) {
  answer += +answerArr[i];
}
console.log(answer);
