const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const D = parseInt(input[0]);
const H = parseInt(input[1]);
const W = parseInt(input[2]);

const ratio = Math.sqrt(H * H + W * W);
const height = Math.floor((D * H) / ratio);
const width = Math.floor((D * W) / ratio);

console.log(`${height} ${width}`);
