const http = require('http');
const express = require('express');

//var session=require('express-session') ;



const path = require('path');

const home = require('./controllers/home');

//const requestListener = function (req, res) {
 //   res.writeHead(200);
 //   res.end('Hello, World!');
//}

const staticPath=path.join(__dirname,"/public");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.static(staticPath))


//const server = http.createServer(requestListener);

app.listen( port, () => {
    console.log(`Example app listening on port ${port}!`);
});
//server.listen(port);
