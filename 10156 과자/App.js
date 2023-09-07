let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0];

let [K, N, M] = input.split(' ').map(Number);

answer = K * N - M;

if (answer <= 0) {
  console.log(0);
} else {
  console.log(K * N - M);
}
