let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0]
  .split(' ');

let A = BigInt(input[0]);
let B = BigInt(input[1]);

console.log(A * B + '');
