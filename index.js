const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello to NodeJs");
});

server.listen(8000, () => {
    console.log('Listening on port 8000')
})