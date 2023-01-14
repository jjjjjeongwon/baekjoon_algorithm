// let input = require('fs')
//   .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
//   .split('\n')
//   .map(Number);
let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0, { encoding: 'utf-8' }).split('\n');

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

let arr = [];

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) arr.push(i);
}

arr.forEach((answer) => console.log(answer));
