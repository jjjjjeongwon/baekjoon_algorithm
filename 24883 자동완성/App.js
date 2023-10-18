let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n')[0];

if (input === 'N' || input === 'n') {
  console.log('Naver D2');
} else {
  console.log('Naver Whale');
}
