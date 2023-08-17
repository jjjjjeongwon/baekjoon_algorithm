let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');

let wordList = input[0].split('');
let bomb = input[1].split('');
let wordStack = [];

// console.log(wordList.length);
while (true) {
  for (let i = 0; i < wordList.length; i++) {
    console.log(wordList[i], bomb[0], i);
    if (wordList[i] !== bomb[0]) {
      wordStack.push(wordList[i]);
    } else {
      console.log(i);

      for (let j = i; j < i + bomb.length; j++) {
        console.log('check', j, wordList[j], bomb[j - i]);
        if (wordList[j] !== bomb[j - i]) {
          wordStack.push(wordList[j]);
        }
      }
    }
  }
  console.log('checkWordStack', wordStack);
  wordList = wordStack;
  console.log('wordList', wordList);
}
