const fs = require('fs');

//  create file
fs.writeFileSync('read.txt', 'My name is samim')

// add test
fs.appendFileSync('read.txt', ' I am a software Engineer')

// read file
const buf_text = fs.readFileSync('read.txt')
const orginal_text = buf_text.toString();
console.log(orginal_text)

// rename file
fs.renameSync('read.txt','readwrite.txt')