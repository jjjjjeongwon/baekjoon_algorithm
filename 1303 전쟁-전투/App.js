let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let [N, M] = input[0].split(' ').map(Number);
let myCount = 0;
let enemyCount = 0;

const locationList = input.slice(1).map((v) => v.split(''));

// 방문 여부를 저장할 배열
const visited = Array.from({ length: M }, () => Array(N).fill(false));

// 상, 하, 좌, 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(startX, startY, teamColor) {
  const queue = [[startX, startY]];
  visited[startX][startY] = true;
  let count = 0;

  while (queue.length) {
    const [x, y] = queue.shift();
    count++;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        locationList[nx][ny] === teamColor
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }

  return count;
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      const teamColor = locationList[i][j];
      const size = bfs(i, j, teamColor);

      if (teamColor === 'W') {
        myCount += size * size;
      } else {
        enemyCount += size * size;
      }
    }
  }
}

console.log(myCount, enemyCount);
