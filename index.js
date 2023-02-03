//  simple CRUD operation
const fs = require('fs');
// c - create file
fs.writeFileSync('bio.txt','My name is samim aktar');
// update file
fs.appendFileSync('bio.txt',' I am a software engineer');
// read data
let filedata = fs.readFileSync('bio.txt')
console.log(filedata.toString())
// rename file
fs.renameSync('bio.txt','mybio.txt');
// delete file
fs.unlinkSync('mybio.txt');