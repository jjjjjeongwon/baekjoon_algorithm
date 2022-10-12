let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

console.log(input);
let count =0;
for(let i =0; i<input.length; i++){
    // console.log(input.indexOf(input[i]%42)==input[i]%42);
    for(let j =0; j<input.length; j++){
        // console.log(input.indexOf(input[i]%42))
        if(input[i]%42 == input[j]%42)
        count++;
    }
    
    // if(input[i]%42)
    //     count ++;
    console.log(count);
}