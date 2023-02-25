const http = require('http');
const fs = require('fs');

const server = http.createServer();

// Normal way to read data 
// server.on('request', (req, res) => {
//     fs.readFile('input.txt', (err, data) => {
//         if (err) {
//             console.log(err)
//         }
//         res.end(data);
//     })
// })

// read data using stream
server.on('request', (req, res) => {
const readStream = fs.createReadStream('input.txt');
// const readStream = fs.createReadStream('input.txtt'); //for error example

readStream.on('data',(chunkdata)=>{
    res.write(chunkdata);
})
readStream.on('end',()=>{
    res.end();
})
readStream.on('error',(err)=>{
    console.log("err");
    res.end('file not found');
})

})

server.listen(5000, () => {
    console.log('listeing on port 5000')
})