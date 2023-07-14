let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n')[0]
  .split(' ');

let R1, S;
[R1, S] = input;

let R2 = 2 * S - R1;

console.log(R2);
