let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let T = Number(input[0]);
let startNum, goalNum;
let visitedArr = [];
let changeArr = [];

// 소수 판별 함수
function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// 문자열 내 특정 인덱스 문자 바꾸는 함수
function replaceAt(arr, index, replacement) {
  return arr.slice(0, index) + replacement + arr.slice(index + 1);
}

function bfs(startNum, goalNum) {
  let queue = [startNum];
  visitedArr[startNum] = true;
  changeArr[startNum] = 0;

  while (queue.length) {
    let currNum = queue.shift();
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 10; j++) {
        let nextNum = replaceAt(currNum, i, j + '');

        if (
          nextNum < 1000 ||
          nextNum > 9999 ||
          !isPrime(nextNum) ||
          visitedArr[nextNum]
        )
          continue;

        visitedArr[nextNum] = true;
        changeArr[nextNum] = changeArr[currNum] + 1;
        queue.push(nextNum);
        if (nextNum === goalNum) return;
      }
    }
  }
}

// 여기서 input개수 처리해줘야 함 for문
for (let i = 1; i < T + 1; i++) {
  [startNum, goalNum] = input[i].split(' ');

  visitedArr = Array(10000).fill(false); // 방문을 표시할 배열
  changedArr = Array(10000).fill(-1); // 비밀번호 변경 횟수를 표시할 배열 (초기값: -1)

  bfs(startNum, goalNum);

  console.log(changeArr[goalNum] === -1 ? 'Impossible' : changeArr[goalNum]);
}
