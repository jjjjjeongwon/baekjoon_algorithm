const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input[0].split(" ")[1]);

const boxes = input[1].split(" ").map(Number);
const books = input[2].split(" ").map(Number);

let currentBoxIndex = 0;

for (let i = 0; i < m; i++) {
  if (boxes[currentBoxIndex] >= books[i]) {
    boxes[currentBoxIndex] -= books[i];
  } else {
    currentBoxIndex++;
    i--;
  }
}

const remainingSpace = boxes.reduce((acc, cur) => acc + cur, 0);
console.log(remainingSpace);
