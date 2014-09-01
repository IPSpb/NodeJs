/**
 * В PhpStorm -> Edit Configuration -> javascript file(Прописать путь до файла)
 * нажать single instance only ( чтоб по кнопке запуска сервер перегружался )
 */
var http = require('http');

var server = new http.Server(); // EventEmitter

server.listen(1337, '127.0.0.1');

var counter =0;

// Для того чтобы посмотреть какие события еще используются
var emit = server.emit;
server.emit = function(event /* , arg1, arg2, ...*/) {
    console.log(event);
    emit.apply(server, arguments);
};

server.on('request', function(req, res) {
    // req - входящий запрос, содержит информацию, которую присылает браузер
    // res - объект ответа
    // Из первого читаем во второй пишем
    res.end("Привет мир!" + ++counter);
});