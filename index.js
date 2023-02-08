const os = require('os')

const sysInfo = os.arch();
const freeMemory = os.freemem();
console.log(sysInfo)
console.log(`${freeMemory/1024/1024/1024}`)