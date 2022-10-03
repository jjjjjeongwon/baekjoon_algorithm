let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

let arr1 = input[0].split(' ').map(Number);
let arr2 = input[1].split(' ').map(Number);
let Time=arr1[0]+Math.floor((arr1[1]+arr2[0])/60);
let Min=(arr1[1]+arr2[0])%60;

// console.log(input);
// console.log(arr1);
// console.log(arr2);
// console.log(Time);
// console.log(Min);

if(Time>=24){
    console.log(Time%24,Min);
}else{
    console.log(Time, Min);
}


