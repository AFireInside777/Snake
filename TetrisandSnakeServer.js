var http = require('http');
var fs = require("fs")
var express = require('express');
const path = require("path")

var app = express();

app.use('/static', express.static(path.join(__dirname + '/static'))) //Allows HTML File to load the JS file. Have to set the folder which has your static assets.

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/TetrisandSnake.html"));
 })

 var server = app.listen(1337, "127.0.0.1", function () { //http://127.0.0.1:1337/
    var host = server.address().address
    var port = server.address().port
    
    console.log("The server is being hosted at: http://%s:%s",host,port)
 })

//Graveyard
// http.createServer(function (req, res) {
    
//     var ua = parser(req.headers['user-agent']); // get user-agent header
    
//     res.end(JSON.stringify(ua, null, '  ')); // write the result as response
// }).listen(1337, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:1337/');


// res.write('<html>');
// res.write("Hello. Trying to write on this page.")

// console.log(__dirname)

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/html'})
//     const html = fs.readFileSync(__dirname + '/TetrisandSnake.html')
//     res.end(html)
// }).listen(1337, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:1337/');