let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0];

let N = Number(input);

for (let i = 0; i < N; i++) {
  let blank = ' '.repeat(i);
  let star = '*'.repeat(N - i);

  console.log(blank + star);
}
