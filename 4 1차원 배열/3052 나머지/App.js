let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(' ').map(Number);

// const fs =require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x => Number(x));

//입력으로 받은 요소 각각에 42로 나눈 나머지를 새로운 배열에 저장해준다.
const newInput = input.map((x) => x%42);
//새로운 배열 중 중복을 제거한다.
const set = new Set(newInput);
const uniqueArr = [...set];

//배열의 길이 = 나머지 개수
console.log(uniqueArr.length);