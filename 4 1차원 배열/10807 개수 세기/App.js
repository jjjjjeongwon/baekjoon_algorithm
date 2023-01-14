// let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
let input = require('fs').readFileSync(0, { encoding: 'utf-8' }).split('\n');

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

let inputArr = input[1].split(' ');
let findNum = input[2];

let count = inputArr.filter((element) => findNum === element).length;

console.log(count);
