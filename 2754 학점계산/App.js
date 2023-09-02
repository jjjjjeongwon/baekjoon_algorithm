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

const C = input;

const gradeList = {
  'A+': 4.3,
  A0: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B0: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C0: 2.0,
  'C-': 1.7,
  'D+': 1.3,
  D0: 1.0,
  'D-': 0.7,
  F: 0.0,
};

console.log(gradeList[C].toFixed(1));
