let input = require("fs")
  .readFileSync(__dirname + "/input.txt", {
    encoding: "utf-8",
  })
  .split("\n")[0];

const [N, K] = input.split(" ").map(Number);

let ans = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    ans.push(i);
  }
}

if (ans.length < K) {
  console.log(0);
} else {
  console.log(ans[K - 1]);
}
