let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs')
//   .readFileSync(0, { encoding: 'utf-8' })
//   .split('\n')[0]
//   .split(' ')
//   .map(Number);

let bridgeLength = input[0];
let lampCount = input[1];
let lampLocation = input[2].split(' ').map(Number);
let betweenMax = 0;

for (let i = 0; i < lampCount - 1; i++) {
  if (betweenMax < lampLocation[i + 1] - lampLocation[i]) {
    betweenMax = lampLocation[i + 1] - lampLocation[i];
  }
}

let firstEndMax = Math.max(
  lampLocation[0] - 0,
  bridgeLength - lampLocation[lampLocation.length - 1]
);

if (2 * firstEndMax >= betweenMax) {
  console.log(firstEndMax);
} else {
  console.log(Math.ceil(betweenMax / 2));
}
