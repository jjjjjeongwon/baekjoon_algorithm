let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

console.log(input);
let count =0;
let arr = 0;
for(let i =0; i<input.length; i++){
arr=input[i]%42;
console.log(arr.split("\n").map(Number));
}

