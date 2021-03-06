/**
 *
 */
var url = require('url');
//var log = require('winston');
var log = require('./log')(module);

module.exports = function(req, res) {
    var urlParsed = url.parse(req.url, true);

    log.info("Got request", req.method, req.url); // info сообщение средней важности

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
        var message = urlParsed.query.message;
        log.debug("Echo: " + message); // debug маленькой важности
        res.end(message);
        return;
    }

    log.error("Unknown URL"); // ошибка, очень важная

    res.statusCode = 404;
    res.end('Not Found');
}