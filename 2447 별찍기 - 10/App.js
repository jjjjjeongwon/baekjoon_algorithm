let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs')
//   .readFileSync(0, { encoding: 'utf-8' })
//   .split('\n')[0]
//   .split(' ')
//   .map(Number);

// let N = Number(input);
// let patternBasicTopBottom = '***';
// let patternBasicMid = '* *';

// // console.log(patternBasic);

// // for (let i = 0; i < 3; i++) {
// console.log(patternBasicTopBottom.repeat(9));
// console.log(patternBasicMid.repeat(9));
// console.log(patternBasicTopBottom.repeat(9));
// // }

const num = parseInt(input[0]);

const lines = [];

printStars(num);
console.log(lines.join(''));

function printStars(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    lines.push('\n');
  }
}

function star(i, j, num) {
  if (i % 3 == 1 && j % 3 == 1) {
    lines.push(' ');
  } else {
    if (num == 1) {
      lines.push('*');
    } else {
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
}
