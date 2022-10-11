let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

// console.log(input);


for(i=0; i<input.length-1; i++){
  if(Number(input[i][0])==0&&Number(input[i][2])==0) 
    break ;
 console.log(Number(input[i][0])+Number(input[i][2])); 

}

