const http = require('http');
const fs = require('fs');
const path = require('path')

const app = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/user-data/usersData.json`, 'utf-8')
    const objData = JSON.parse(data)

    if (req.url === '/') {
        res.end('Welcome to Home page');
    } else if (req.url === '/user') {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(objData[4].name)
    }
})

app.listen(5000, () => {
    console.log('Listening on port 5000')
})