let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs')
//   .readFileSync(0, { encoding: 'utf-8' })
//   .split('\n')[0]
//   .split(' ')
//   .map(Number);

let inputNum = Number(input[0]);

for (let i = 1; i <= inputNum; i++) {
  let num = input[i].split(' ').map(Number);
  let a, b;
  [a, b] = [num[0], num[1]];
  let loopNum = [a, a ** 2 % 10, a ** 3 % 10, a ** 4 % 10];

  if (a % 10 === 0) {
    console.log(10);
  } else if (a ** b % 4 === 0) {
    console.log(loopNum[3]);
  } else {
    console.log(loopNum[(b % 4) - 1]);
  }
}
