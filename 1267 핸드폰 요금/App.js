let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");

const time = input[1].split(" ").map(Number);

const solution = (arr) => {
  let [y, m] = [0, 0];
  arr.forEach((el) => {
    y += (parseInt(el / 30) + 1) * 10;
    m += (parseInt(el / 60) + 1) * 15;
  });

  if (y === m) {
    return ["Y M", y].join(" ");
  } else if (y < m) {
    return ["Y", y].join(" ");
  } else {
    return ["M", m].join(" ");
  }
};

console.log(solution(time));
