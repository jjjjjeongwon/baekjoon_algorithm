let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const N = input[0];
const myCards = new Set(input[1].split(' ').map(Number));
const M = input[2];
const cards = input[3].split(' ').map(Number);

const answer = [];
for (let i = 0; i < cards.length; i++) {
  if (myCards.has(cards[i])) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

console.log(answer.join(' '));
