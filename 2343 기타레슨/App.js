let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const lessonLength = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = lessonLength.reduce((a, b) => a + b);

let ans = Infinity;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let count = 1;
  let value = mid;

  for (let i = 0; i < N; i++) {
    if (lessonLength[i] > mid) {
      count = Infinity;
      break;
    }
    if (value - lessonLength[i] > 0) {
      value -= lessonLength[i];
    } else {
      value = mid - lessonLength[i];
      count++;
    }
  }
  if (count > M) {
    start = mid + 1;
  } else {
    end = mid - 1;
    ans = Math.min(ans, mid);
  }
}
console.log(ans);
