// let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")[0].split('').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);



let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n")[0].split(' ').map(Number);
let count =0;
let n=input[0];

do{
    n = (n%10)*10 + (parseInt(n/10)+n%10) %10 ;
    count ++
} while(n!=input[0]);

console.log(count);




// console.log(input);

// let count =0;
// let n = input.join(''); [2,6] => 26
// let n =input; [2,6]
// console.log(n);

// do{
//     n=n[0]*10 + (n[0]+n[1])%10;  
// }
//코드를 n[0], n[1] 이런식으로 써서 조금 줄이려고 하다가 앞, 뒤로 join(), split('') 등 쓸데없는 코드가 더 길어지더라,,,,



