/**
 * Created by igor on 28.07.14.
 */
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Contebt-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8080);
http.close();
console.log('Server running on port 8080.');