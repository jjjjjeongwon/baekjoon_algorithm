let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n')[0];
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

let splitInput = input.split('');
let answer = 0;

let findNumber = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };

if (splitInput[0] === '0' && splitInput[1] === 'x') {
  for (let i = 2; i < splitInput.length; i++) {
    let index = splitInput.length - i;
    if (!isNaN(Number(splitInput[i]))) {
      answer += 16 ** (index - 1) * splitInput[i];
    } else {
      answer += 16 ** (index - 1) * findNumber[splitInput[i]];
    }
  }
  console.log(answer);
} else if (splitInput[0] === '0') {
  for (let i = 1; i < splitInput.length; i++) {
    let index = splitInput.length - i;
    if (splitInput[i] !== '0') {
      answer += 8 ** (index - 1) * splitInput[i];
    }
  }
  console.log(answer);
} else {
  console.log(Number(input));
}
