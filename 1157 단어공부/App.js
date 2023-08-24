let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0]
  .trim();

// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs')
//   .readFileSync(0, { encoding: 'utf-8' })
//   .split('\n')[0]
//   .split(' ')
//   .map(Number);

// [1] 최소 시간 (276ms)
let alphaArr = new Array(26).fill(0);
//aassdefD -> AASSDEFD
let Upper = input.toUpperCase();

for (let i = 0; i < input.length; i++) {
  alphaArr[Upper.charCodeAt(i) - 65]++;
}

let max = Math.max(...alphaArr);
let index = alphaArr.indexOf(max);

let same = false;

for (let i = 0; i < 26; i++) {
  if (alphaArr[i] === max && index !== i) {
    same = true;
    break;
  }
}
console.log(same ? '?' : String.fromCharCode(index + 65));

// [2] ascii number기반 list(316ms)
// const inputUpper = input.toUpperCase();
// let alphaArr = new Array(26).fill(0);

// for (let i = 0; i < inputUpper.length; i++) {
//   let indexNum = inputUpper[i].charCodeAt() - 65;
//   alphaArr[indexNum] += 1;
// }

// let index;
// let maxValue = 0;
// for (let i = 0; i < alphaArr.length; i++) {
//   if (maxValue < alphaArr[i]) {
//     maxValue = alphaArr[i];
//     index = i;
//   } else if (maxValue !== 0 && maxValue === alphaArr[i]) {
//     index = '?';
//   }
// }
// if (index === '?') return console.log('?');
// console.log(String.fromCharCode(index + 65));

// [3] dictionary 활용 (352ms)
// let asciiDic = {};

// for (let i = 0; i < input.length; i++) {
//   let asciiNum = input[i].charCodeAt();
//   if (asciiNum >= 97 && asciiNum <= 122) {
//     asciiNum -= 32;
//   }

//   if (!asciiDic.hasOwnProperty(asciiNum)) {
//     asciiDic[asciiNum] = 0;
//   }

//   asciiDic[asciiNum] += 1;
// }

// function findKeysWithMaxValue(obj) {
//   const maxKeys = [];
//   let maxValue = -Infinity;

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key];
//       if (value > maxValue) {
//         maxValue = value;
//         maxKeys.length = 0; // Reset the array
//         maxKeys.push(key);
//       } else if (value === maxValue) {
//         maxKeys.push(key);
//       }
//     }
//   }

//   return maxKeys;
// }

// const keysWithMaxValue = findKeysWithMaxValue(asciiDic);

// if (keysWithMaxValue.length > 1) {
//   console.log('?');
// } else {
//   console.log(String.fromCharCode(Number(keysWithMaxValue)));
// }
