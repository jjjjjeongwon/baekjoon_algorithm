let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let maxScience = 0;

for (let i = 0; i < 4; i++) {
  maxScience += Number(input[i]);
}

let answer = 0;

for (let i = 0; i < 4; i++) {
  if (maxScience - Number(input[i]) > answer) {
    answer = maxScience - Number(input[i]);
  }
}

let liberalAnswer = Math.max(Number(input[4]), Number(input[5]));

console.log(answer + liberalAnswer);
