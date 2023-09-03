let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

function printWord(word) {
  let len = word.length;
  console.log(word[0] + word[len - 1]);
}

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  printWord(input[i]);
}
