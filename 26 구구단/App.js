let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

// console.log(input[0]);
// console.log(input[2].split(' '));
// console.log(input.length);


let sum =0;
let num = Number(input[1])+2;
// console.log(num);

for(i=2; i<num; i++){
  sum=sum+input[i].split(' ')[0]*input[i].split(' ')[1];
// console.log(input[i].split(' ')[0]*input[i].split(' ')[1]);
}

console.log(input[0]==sum?"Yes":"No");
// console.log(sum);