/**
 * Created by ivpopov on 05.09.14.
 */
var http = require('http');
var log = require('winston');

var server = http.createServer();

server.on('request', require('./request_winston'));

server.listen(1337);

log.debug("Server is running");