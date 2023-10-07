let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0]
  .split(' ');

console.log(Number(input[0] + input[1]) + Number(input[2] + input[3]));
