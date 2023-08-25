let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n')[0]
  .split(' ');

let [N, M] = input;

let chocoMoney = N * 100;

if (chocoMoney < Number(M)) {
  console.log('No');
} else {
  console.log('Yes');
}
