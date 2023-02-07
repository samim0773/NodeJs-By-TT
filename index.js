const fs = require('fs');

// synchronous 
const data = fs.readFileSync('read.txt', 'utf-8');
console.log(data);
console.log('after data print')

// asynchronous

fs.readFile('read.txt', 'utf-8', (err, data) => {
    console.log(data);
})
console.log('asynchronous data print ')