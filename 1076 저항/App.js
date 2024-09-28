const colorMap = {
  black: { value: 0, multiplier: 1 },
  brown: { value: 1, multiplier: 10 },
  red: { value: 2, multiplier: 100 },
  orange: { value: 3, multiplier: 1000 },
  yellow: { value: 4, multiplier: 10000 },
  green: { value: 5, multiplier: 100000 },
  blue: { value: 6, multiplier: 1000000 },
  violet: { value: 7, multiplier: 10000000 },
  grey: { value: 8, multiplier: 100000000 },
  white: { value: 9, multiplier: 1000000000 },
};

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const firstColor = input[0];
const secondColor = input[1];
const thirdColor = input[2];

const resistanceValue =
  (colorMap[firstColor].value * 10 + colorMap[secondColor].value) *
  colorMap[thirdColor].multiplier;

console.log(resistanceValue);
