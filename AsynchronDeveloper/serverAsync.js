/**
 * Сервер асинхронный
 */

var http = require('http');
var fs = require('fs');

// 1. Не блокирует
// 2. Не работает try..catch => callback(err)
// 3. Сложнее (есть способы упростить жизнь)

http.createServer(function(req, res) {
    var info;
    if(req.url == '/') {

        fs.readFile('index.html', function(err, info) {  // callback
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("На сервере произошла ошибка!");
                return;
            }
            res.end(info);
        });

    } else { /* 404 */ }
}).listen(3000);
