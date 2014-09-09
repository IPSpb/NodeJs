/**
 * Created by ivpopov on 09.09.14.
 */
var http = require('http');

var server = new http.Server(function(req, res){
   /* обработка запросов */
}).listen(3000);

/* Через 2.5 сек сервер закроется */
setTimeout(function(){
    server.close();
}, 2500);

/* Каждую секунду выводим информацию об используемой памяти */
var timer = setInterval(function() {
    console.log(process.memoryUsage());
}, 1000);

timer.unref(); // Указывает, что таймер является второстепенным, нужен чтоб не зациклился setTimeout иначе close не сработает пока работают какие то watcher