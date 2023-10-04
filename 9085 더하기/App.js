let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

// for문 내 조건 +=2
const T = Number(input[0]);

for (let i = 1; i < 2 * T; i += 2) {
  let sum = 0;
  let numbers = input[i + 1].split(' ').map(Number);
  for (let j = 0; j < input[i]; j++) {
    sum += numbers[j];
  }

  console.log(sum);
}

// for문 내 조건 ++
const t = parseInt(input.shift());
for (let i = 0; i < t; i++) {
  let sum = 0;
  let length = parseInt(input.shift());
  let nums = input.shift().split(' ').map(Number);
  for (let j = 0; j < length; j++) {
    sum += nums[j];
  }
  console.log(sum);
}
