/**
 * Created by ivpopov on 09.09.14.
 */
var http = require('http');

http.createServer(function(req, res) {

    process.nextTick(function() { // сделает асинхронный запрос, но выполнется до того как придут новые данные
       req.on('readable', function() {
           // должен сработать на ближайших данных
       })
    });

}).listen(1337);