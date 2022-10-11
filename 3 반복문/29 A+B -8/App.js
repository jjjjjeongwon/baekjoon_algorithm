let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

// console.log(input);

for(i=1; i<=Number(input[0]); i++){
  console.log(`Case #${i}:`,input[i].split(' ')[0],"+",input[i].split(' ')[1],"=",Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1]));
}

