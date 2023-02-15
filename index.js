const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("Welcome to Home page");
    } else if (req.url == '/about') {
        res.end('Welcome to About page')
    } else if (req.url == '/contact') {
        res.end('Welcome to Contact page')
    } else {
        res.writeHead(400, { "content-type": "text/html" });
        res.end("<h1> 404 error pages.</h1>")
    }
});

server.listen(8000, () => {
    console.log('Listening on port 8000')
})