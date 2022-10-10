let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).trim().split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

// console.log(input);


for(i=0; i<input.length; i++){
    let splitInput = input[i].trim().split(' ').map(Number);
    console.log(splitInput[0]+splitInput[1]);


}

