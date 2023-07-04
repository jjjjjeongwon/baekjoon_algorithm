let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .trim()
  .split('\n')[0]
  .split(' ')
  .map(BigInt);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// 1안 - answer에 개행문자를 넣어서 문자로 형변환
let price = input[0];
let money = input[1];
let answer = price / money + '\n';
answer += price % money;

console.log(answer);

// 2안 - console.log() 찍을 시 +''를 통해 문자로 형변환
// console.log(price / money + '');
// console.log((price % money) + '');
