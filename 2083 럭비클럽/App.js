let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n');

let inputInfo = input;

for (let i = 0; i < input.length; i++) {
  let info = inputInfo[i].split(' ');
  if (info[0] === '#' && info[1] === '0' && info[2] === '0') break;
  if (info[1] > 17 || info[2] >= 80) {
    console.log(`${info[0]} Senior`);
  } else {
    console.log(`${info[0]} Junior`);
  }
}
