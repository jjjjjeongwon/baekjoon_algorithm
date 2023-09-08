let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0]
  .trim();

let [A, B, C] = input.split(' ').map(BigInt);

console.log(A + B + C + '');
