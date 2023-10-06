let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0]
  .split(' ')
  .map(Number);

let sortArr = input.sort((a, b) => a - b);

console.log(sortArr[1]);
