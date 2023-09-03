let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs')
//   .readFileSync(0, { encoding: 'utf-8' })
//   .split('\n')[0]
//   .split(' ')
//   .map(Number);

// 방법 1 - 시간 부터 초까지 계산해서 재할당해주는 방식

let [A, B, C] = input[0].split(' ').map(Number);

const D = Number(input[1]);

calcTime = parseInt(D / 3600);
calcMin = parseInt((D - calcTime * 3600) / 60);
calcSec = parseInt(D - calcTime * 3600 - calcMin * 60);

A += calcTime;
B += calcMin;
C += calcSec;

if (C > 59) {
  B++;
  C -= 60;
}

if (B > 59) {
  A++;
  B -= 60;
}

if (A > 23) {
  A = parseInt(A % 24);
}

console.log(A, B, C);

// 방법 2 - while반복을 통해 60, 24가 넘을 때 마다 빼주는 방식
// let [hour, minute, second] = input[0].split(' ').map(Number);
// let dur = Number(input[1]);

// second += dur;

// while (second >= 60) {
//   minute++;
//   second -= 60;
// }

// while (minute >= 60) {
//   hour++;
//   minute -= 60;
// }

// while (hour >= 24) {
//   hour -= 24;
// }

// console.log(hour, minute, second);
