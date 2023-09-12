let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let [N, M] = input[0].split(' ').map(Number);

let numberList = input[1].split(' ').map(Number);

numberList.sort((a, b) => a - b);

let visited = new Array(numberList.length).fill(false);

let tmp = [];
let answer = [];
function dfs(idx, cnt) {
  if (cnt === M) {
    answer.push(tmp.join(' '));
  } else {
    for (let i = idx; i < numberList.length; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        tmp.push(numberList[i]);
        dfs(i, tmp.length);
        visited[i] = 0;
        tmp.pop();
      }
    }
  }
}

dfs(0, 0);

console.log(answer.join('\n'));
