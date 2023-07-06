let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');

let countCommand = Number(input[1]);
let mainStack = input[0].split('');
let additionStack = [];

for (let i = 2; i < 2 + countCommand; i++) {
  let wordList = input[i].split(' ');

  if (wordList[0] === 'L') {
    if (mainStack.length !== 0) {
      additionStack.push(mainStack.pop());
    }
  } else if (wordList[0] === 'D') {
    if (additionStack.length !== 0) {
      mainStack.push(additionStack.pop());
    }
  } else if (wordList[0] === 'B') {
    mainStack.pop();
  } else if (wordList[0] === 'P') {
    mainStack.push(wordList[1]);
  }
}

if (additionStack.length !== 0) {
  let count = additionStack.length;
  for (let i = 0; i < count; i++) {
    mainStack.push(additionStack.pop());
  }
}

console.log(mainStack.join(''));
