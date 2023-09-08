let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const day = Number(input[0]);
const cars = input[1].split(' ').map(Number);

let count = 0;

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === day) {
    count++;
  }
}

console.log(count);
