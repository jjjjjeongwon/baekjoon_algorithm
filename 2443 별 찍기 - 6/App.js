let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0];

for (let i = input; i > 0; i--) {
  let starNum = 2 * i - 1;
  let maxNum = Number(input) * 2 - 1;

  let blank = (maxNum - 1) / 2;

  console.log(' '.repeat(blank - (i - 1)) + '*'.repeat(starNum));
}
