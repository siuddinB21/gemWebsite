const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);
var port = process.env.PORT || 5000;
server.listen(8080);
