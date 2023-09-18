let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const N = Number(input[0]);
let timeTable = [];

for (let i = 1; i < N + 1; i++) {
  timeTable.push(input[i].split(' ').map(Number));
}

timeTable = timeTable.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let count = 0;
let checkTime = 0;

for (let i = 0; i < N; i++) {
  if (checkTime <= timeTable[i][0]) {
    count++;
    checkTime = timeTable[i][1];
  }
}

console.log(count);
