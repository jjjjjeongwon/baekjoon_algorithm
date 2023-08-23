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

let AnswerWord = [];

for (let i = 0; i < input.length; i++) {
  let Ascii = input.charCodeAt([i]);
  if (Ascii >= 65 && Ascii <= 90) {
    AnswerWord.push(String.fromCharCode(Ascii + 32));
  }
  if (Ascii >= 97 && Ascii <= 122) {
    AnswerWord.push(String.fromCharCode(Ascii - 32));
  }
}

console.log(AnswerWord.join(''));
