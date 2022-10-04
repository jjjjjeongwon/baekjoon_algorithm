let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")[0];
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

console.log(input);
let star = '';

for(i=1; i<=input; i++){
  star = star + "*"+ "\n";
}
console.log(star);