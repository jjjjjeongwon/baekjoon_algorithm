let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")[0];
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

console.log(input);

let inputSave = input
let n = 0;

while(true){
    
    
    n += input[1]*10+input[0]+input[1];
    console.log(n);
}


