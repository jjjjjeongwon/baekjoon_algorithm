let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

const arr = [];

for (let i = 0; i < 10; i++) {
    const remain = input[i]%42;
  if(!arr.includes(remain)){
    arr.push(remain);
  }
}

console.log(arr.length);

//2안
// const arr = [];
// const result = {};

// for (let i = 0; i < input.length; i++) {
//   arr.push(input[i] % 42);
// }

// arr.forEach((x) => {
//   result[x] = (result[x] || 0) + 1;
// });

// console.log(Object.keys(result).length);


