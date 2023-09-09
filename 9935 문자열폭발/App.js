let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');

let wordList = input[0];
let bomb = input[1];
let bombLength = bomb.length;

let wordListStack = [];

for (let i = 0; i < wordList.length; i++) {
  wordListStack.push(wordList[i]);
  if (wordList[i] === bomb[bombLength - 1]) {
    let check = wordListStack.slice(-bombLength).join('');
    if (check === bomb) {
      wordListStack.splice(wordListStack.length - bombLength, bombLength);
    }
  }
}

console.log(wordListStack.join('') ? wordListStack.join('') : 'FRULA');
