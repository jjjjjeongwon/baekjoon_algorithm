let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

console.log(input);
// console.log(90>=input[0]&&input[0]>=30);

if(input[0]>0&&input[1]>0){
    console.log("1");
}else if(input[0]<0&&input[1]>0){
    console.log("2");
}else if(input[0]<0&&input[1]<0){
    console.log("3");
}else{
    console.log("4");
}
return;


// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0];
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');