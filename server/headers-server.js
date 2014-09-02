/**
 * http://127.0.0.1/echo?message=Hello
 */

var http =require('http'),
    url = require('url');

var server = new http.Server(function(req, res) {
    var urlParsed = url.parse(req.url, true);

    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
//        res.writeHead(200, "OK", {'Cache-control' : 'no-cache'}); // Явное отправка заголовка, заголовки пишутся тутже не ожидая ответа сервера
        res.setHeader('Cache-control', 'no-cache'); // Отмена кеширование результата сервера removeHeader(удаляет заголовок)
        res.end( urlParsed.query.message );
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }

}); // EventEmitter

server.listen(1337, '127.0.0.1');