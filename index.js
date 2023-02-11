const path = require('path');

console.log(path.dirname('E:/Practice/NodeJs/NodeJsByTT/index.js'))
console.log(path.extname('E:/Practice/NodeJs/NodeJsByTT/index.js'))
console.log(path.basename('E:/Practice/NodeJs/NodeJsByTT/index.js'))
console.log(path.parse('E:/Practice/NodeJs/NodeJsByTT/index.js'))
const myPath = path.parse('E:/Practice/NodeJs/NodeJsByTT/index.js')
console.log('file name is :', myPath.name)