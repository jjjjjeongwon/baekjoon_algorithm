let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');

let countCommand = Number(input[1]);
let mainStack = input[0].split('');
let additionStack = [];
let wordList, addWord;

for (let i = 2; i < 2 + countCommand; i++) {
  [wordList, addWord] = input[i].split(' ');
  switch (wordList) {
    case 'L':
      if (mainStack.length !== 0) {
        additionStack.push(mainStack.pop());
      }
      break;
    case 'D':
      if (additionStack.length !== 0) {
        mainStack.push(additionStack.pop());
      }
      break;
    case 'B':
      mainStack.pop();
      break;
    case 'P':
      mainStack.push(addWord);
      break;
  }
}

mainStack = mainStack.join('') + additionStack.reverse().join('');
console.log(mainStack);
