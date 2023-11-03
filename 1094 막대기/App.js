let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n').map(Number)[0];



  let stick = 64
const arr = []
let count = 0
let answer = 0

if(input === 64) {
    console.log(1)
    return
}

while(stick>1) {
    if(stick === input) {
        console.log(1)
        return
    }
    stick = stick/2 
    if(stick > input) {
        arr.push(stick)
    }
    else {
        arr.push(stick)
        arr.push(stick)
    }
}

for(let i = 0 ; i < arr.length ; i ++) {
  if(input - count >= arr[i]) {
      count += arr[i]
      answer += 1
  }
  
  if(input - count === 0) {
      console.log(answer)
      return
  }

}
  