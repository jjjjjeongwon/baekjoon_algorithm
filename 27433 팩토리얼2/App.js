let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0];

function factorial(num) {
  if (num === 0) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(Number(input)));
