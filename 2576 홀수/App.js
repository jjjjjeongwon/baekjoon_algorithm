let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let oddSum = 0;
let minNum = Infinity;

for (let i = 0; i < 7; i++) {
  let num = Number(input[i]);
  if (num % 2) {
    oddSum += num;
    if (minNum > num) {
      minNum = num;
    }
  }
}

if (!oddSum) {
  console.log(-1);
  return;
}

console.log(oddSum);
console.log(minNum);
