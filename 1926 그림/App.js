let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((v) => v.split(' '));
const visited = Array.from({ length: n }, () => Array(m).fill(false));
// console.log(visited);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let paintsCount = 0;
function bfs(y, x) {
  let maxSize = 1;

  let queue = [[y, x]];

  while (queue.length) {
    let [cy, cx] = queue.shift();

    for (let idx = 0; idx < 4; idx++) {
      let nx = cx + dx[idx];
      let ny = cy + dy[idx];

      if (
        nx >= 0 &&
        nx < m &&
        ny >= 0 &&
        ny < n &&
        !visited[ny][nx] &&
        graph[ny][nx] === '1'
      ) {
        maxSize++;
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }

  return maxSize;
}

let maxWidth = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === '1' && !visited[i][j]) {
      visited[i][j] = true;
      paintsCount++;
      maxWidth = Math.max(maxWidth, bfs(i, j));
    }
  }
}

console.log(paintsCount);
console.log(maxWidth);
