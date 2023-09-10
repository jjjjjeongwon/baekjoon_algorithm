let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let [N, K] = input[0].split(' ').map(Number);
let wordsList = input.slice(1, N + 1);
let alphabetArr = new Array(26).fill(0);
let readCount = K - 5;
let answer = 0;

if (readCount < 0) {
  console.log(0);
  return;
}

// 각각 a,c,i,n,t
alphabetArr[0] = 1;
alphabetArr[2] = 1;
alphabetArr[8] = 1;
alphabetArr[13] = 1;
alphabetArr[19] = 1;

let dfs = (index, readCount) => {
  for (let i = index; i < 26; i++) {
    if (alphabetArr[i] === 0) {
      alphabetArr[i] = 1;
      dfs(i, readCount - 1);
      alphabetArr[i] = 0;
    }
  }

  if (readCount === 0) {
    let count = 0;
    for (let i = 0; i < N; i++) {
      let flag = true;
      for (let j = 0; j < wordsList[i].length; j++) {
        if (alphabetArr[wordsList[i][j].charCodeAt() - 97] === 0) {
          flag = false;
          break;
        }
      }
      if (flag) count++;
    }
    answer = Math.max(answer, count);
  }
};

dfs(0, readCount);

console.log(answer);
