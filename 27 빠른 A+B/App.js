let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

let num = Number(input[0]);

let answer = '';
for(i=1; i<=num; i++){
  answer+=Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1])+"\n";
}

console.log(answer);