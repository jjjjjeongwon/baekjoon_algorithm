let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0];
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs')
//   .readFileSync(0, { encoding: 'utf-8' })
//   .split('\n')[0]
//   .split(' ')
//   .map(Number);
const N = input;

for (let i = N; i > 0; i--) {
  console.log('*'.repeat(i));
}
