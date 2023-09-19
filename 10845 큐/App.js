let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');

const N = Number(input[0]);

let queue = [];
let answer = [];

for (let i = 1; i < N + 1; i++) {
  checkCommand(input[i]);
}

function checkCommand(command) {
  let word = command.split(' ');
  let len = queue.length;

  switch (word[0]) {
    case 'push':
      queue.push(word[1]);
      break;
    case 'pop':
      len ? answer.push(queue.shift()) : answer.push(-1);
      break;
    case 'size':
      answer.push(len);
      break;
    case 'empty':
      len ? answer.push(0) : answer.push(1);
      break;
    case 'front':
      len ? answer.push(queue[0]) : answer.push(-1);
      break;
    case 'back':
      len ? answer.push(queue[len - 1]) : answer.push(-1);
      break;
  }
}

console.log(answer.join('\n'));
