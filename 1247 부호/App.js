// let input = require('fs')
//   .readFileSync(__dirname + '/input.txt', {
//     encoding: 'utf-8',
//   })
//   .split('\n');

// let count = 0;
// let num = Number(input[0]);
// let start = 1;
// while (true) {
//   if (count === 3) {
//     break;
//   }

//   let ans = BigInt(0);

//   for (let i = start; i < num + start; i++) {
//     console.log(i);
//     let big = BigInt(input[i]);
//     ans += big;
//   }

//   let ansNum = ans + '';

//   if (ansNum > 0) {
//     console.log('+');
//   }
//   if (ansNum < 0) {
//     console.log('-');
//   }
//   if (ansNum === '0') {
//     console.log('0');
//   }
//   start += 1 + num;
//   num = Number(input[num + 1]);
//   count++;
// }

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solveTestCase() {
  const N = parseInt(input.shift());
  let sum = BigInt(0);

  for (let i = 0; i < N; i++) {
    const num = BigInt(input.shift());
    sum += num;
  }

  if (sum === 0n) {
    console.log('0');
  } else if (sum > 0n) {
    console.log('+');
  } else {
    console.log('-');
  }
}

for (let i = 0; i < 3; i++) {
  solveTestCase();
}
