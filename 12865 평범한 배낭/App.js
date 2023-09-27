let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

let [N, K] = input.shift().split(' ').map(Number);

let items = input.map((v) => v.split(' ').map(Number));

function knapsack(N, K, items) {
  // dp 배열 초기화
  const dp = new Array(N + 1);
  for (let i = 0; i <= N; i++) {
    dp[i] = new Array(K + 1).fill(0);
  }

  // 물건을 하나씩 고려하며 최대 가치 계산
  for (let i = 1; i <= N; i++) {
    const [weight, value] = items[i - 1]; // 물건의 무게와 가치
    for (let w = 1; w <= K; w++) {
      if (weight <= w) {
        // 현재 물건을 배낭에 넣을 수 있는 경우
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
      } else {
        // 현재 물건을 배낭에 넣을 수 없는 경우
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // 최대 가치 반환
  return dp[N][K];
}

console.log(knapsack(N, K, items));
