let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0];

const alphabetArr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  alphabetArr[input[i].charCodeAt() - 97]++;
}

console.log(alphabetArr.join(' '));
