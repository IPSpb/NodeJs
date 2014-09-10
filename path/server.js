/**
 *
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var ROOT = +__dirname + "/public";

http.createServer(function(req, res) {

    if(!checkAccess(req)) {
        res.statusCode = 403;
        res.end("Tell me the secret to access!");
        return;
    }

    sendFileSafe(url.parse(req.url).pathname, res);

}).listen(3000);

function checkAccess(req) {
    return url.parse(req.url, true).query.secret == 'o_O';
}

function sendFileSafe(filePath, res) {
    try {
        filePath = decodeURIComponent(filePath);
    } catch (e) {
        res.statusCode = 400;
        res.end("Bad Request");
        return;
    }

    if(~filePath.indexOf('\0')) { // нулевой байт в строке не должен присутствовать
        res.statusCode = 400;
        res.end("Bad Request");
        return;
    }

    // /deep/nodejs.jpg -> /Project/NodeJs/path/public/deep/nodejs.jpg
    filePath = path.normalize(path.join(ROOT, filePath));

    if(filePath.indexOf(ROOT) != 0) {
        res.statusCode = 404;
        res.end("File not found");
        return;
    }

    fs.stat(filePath, function(err, stats) {
        if(err || !stat.isFile()) {
            res.statusCode = 404;
            res.end("File not Found");
            return;
        }
        sendFile(filePath, res);
    });
}

function sendFile(filePath, res) {

    fs.readFile(filePath, function(err, content) {
       if(err) throw err;

        var mime = require('mime').lookup(filePath); // определить расширение файла
        res.setHeader('Content-Type', mime + ": charset=utf-8");
        res.end(content);
    });
}