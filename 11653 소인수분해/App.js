let input = require('fs')
  .readFileSync(__dirname + '/input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map(Number)[0];
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

/* while loop 1번 사용 풀이 */
// while (input !== 1) {
//   if (input % i === 0) {
//     console.log(i);
//     input = input / i;
//   } else {
//     i++;
//   }
// }

/* 제곱근 사용 풀이 */
let numSqrt = parseInt(Math.sqrt(input));

for (let i = 2; i <= numSqrt; i++) {
  while (input % i === 0) {
    console.log(i);
    input = input / i;
  }
}
if (input !== 1) {
  console.log(input);
}
