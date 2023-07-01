let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

let arrA = input[1].split(' ');
let arrB = input[2].split(' ');

let arr = [...arrA, ...arrB];

console.log(arr.sort((a, b) => a - b).join(' '));
