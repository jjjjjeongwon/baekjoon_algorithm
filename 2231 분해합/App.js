let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n')[0];
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

let targetNumber = Number(input);

for (let i = 0; i < 1000000; i++) {
  if (targetNumber <= i) break;
  let arr = String(i).split('').map(Number);
  let sum = arr.reduce((a, b) => a + b, 0);

  if (targetNumber === i + sum) {
    return console.log(i);
  }
}
return console.log(0);
