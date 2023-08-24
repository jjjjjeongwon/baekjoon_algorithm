let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0]
  .split('');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"})

// let input = require('fs')
//   .readFileSync(0, { encoding: 'utf-8' })
//   .split('\n')[0]
//   .split(' ')
//   .map(Number);
let asciiDic = {};

for (let i = 0; i < input.length; i++) {
  let asciiNum = input[i].charCodeAt();
  if (asciiNum >= 97 && asciiNum <= 122) {
    asciiNum -= 32;
  }

  if (!asciiDic.hasOwnProperty(asciiNum)) {
    asciiDic[asciiNum] = 0;
  }

  asciiDic[asciiNum] += 1;
}

function findKeysWithMaxValue(obj) {
  const maxKeys = [];
  let maxValue = -Infinity;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value > maxValue) {
        maxValue = value;
        maxKeys.length = 0; // Reset the array
        maxKeys.push(key);
      } else if (value === maxValue) {
        maxKeys.push(key);
      }
    }
  }

  return maxKeys;
}

const keysWithMaxValue = findKeysWithMaxValue(asciiDic);

if (keysWithMaxValue.length > 1) {
  console.log('?');
} else {
  console.log(String.fromCharCode(Number(keysWithMaxValue)));
}
