let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0];

let Numbers = input.split(' ');

Numbers.sort((a, b) => a - b);

console.log(Numbers.join(' '));
