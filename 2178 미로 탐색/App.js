let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let [N, M] = input[0].split(' ').map(Number);

const maze = input.slice(1).map((v) => v.split('').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
  const queue = [[x, y]];

  while (queue.length) {
    let [currX, currY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let cx = currX + dx[i];
      let cy = currY + dy[i];
      if (cx < N && cx >= 0 && cy < M && cy >= 0) {
        if (maze[cx][cy] === 1) {
          maze[cx][cy] = maze[currX][currY] + 1;
          queue.push([cx, cy]);
        }
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (maze[i][j] === 1) {
      bfs(i, j);
    }
  }
}

console.log(maze[N - 1][M - 1]);
