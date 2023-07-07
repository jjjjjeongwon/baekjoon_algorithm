let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

let A = BigInt(input[0]);
let B = BigInt(input[1]);

//1안 - +''를 통해 형변환
// console.log(A + B + '');
// console.log(A - B + '');
// console.log(A * B + '');

//2안 - 개행문자를 넣어서 형변환
let answer = A + B + '\n';
answer += A - B + '\n';
answer += A * B;

console.log(answer);
