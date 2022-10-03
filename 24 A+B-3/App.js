let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

// console.log(input);


let i ;

for(i=1; i<=input[0]; i++){
    console.log(Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1]));
}

// 틀린 코드 
//input 뒤에 엔터가 들어있으면 배열 뒤에 ['','',...]이렇게 붙어서 콘솔에 NaN이 나오게 됨
// for(i=1; i<input.length; i++){  
//     console.log(Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1]));
// }
