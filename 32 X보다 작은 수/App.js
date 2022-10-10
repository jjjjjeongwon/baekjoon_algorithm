let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

let firstInput=input[0].split(' ').map(Number);
let secondInput =input[1].split(' ').map(Number)

// console.log(firstInput);
// console.log(secondInput);

let answer='';

for(i=0; i<firstInput[0]; i++){
  if(secondInput[i]<firstInput[1]){
    answer += secondInput[i]+' '; 
  }

}

console.log(answer);


