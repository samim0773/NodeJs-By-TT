const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {

    // ---- method 1

    // const readStream = fs.createReadStream('input.txt');
    // // const readStream = fs.createReadStream('input.txtt'); //for error example

    // readStream.on('data', (chunkdata) => {
    //     res.write(chunkdata);
    // })
    // readStream.on('end', () => {
    //     res.end();
    // })
    // readStream.on('error', (err) => {
    //     console.log("err");
    //     res.end('file not found');
    // })

    const readStream = fs.createReadStream('input.txt');
    readStream.pipe(res)
})

server.listen(5000, () => {
    console.log("server is running on port 5000")
})
