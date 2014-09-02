/**
 * http://127.0.0.1/echo?message=Hello
 * Проверяет наличие echo и параметром message, если есть то выводит message иначе ставит статус 404 и выводит страница не найдена
 * res.end обязателен иначе браузер будет висеть, всегда нужно возвращать ответ
 */

var http = require('http');
var url = require('url'); // Модуль для разбора url

var server = new http.Server(function(req, res) {
    console.log( req.method, req.url );
//    res.end(); // Ответить необходимо, иначе запрос зависнет
    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.end( urlParsed.query.message );
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }

}); // EventEmitter

server.listen(1337, '127.0.0.1');
