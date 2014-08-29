/**
 * Утечка памяти
 * каждых 200 милисекунд создается объект Request и выводится сколько он сожрал памяти
 * Максимальное количество обработчиков у ee - 10, иначе warning
 */
//function Request() {
//    var self = this;
//
//    this.bigDate = new Array(1e6).join('*');
//
//    this.send = function(data) {
//        console.log(data);
//    };
//
//    this.onError = function() {
//        self.send("извените, у нас проблема");
//    };
//}
//
//setInterval(function() {
//    var request = new Request();
//    console.log(process.memoryUsage().heapUsed);
//}, 200);

/**
 * Ниже код в комментариях вызывает утечку памяти так как пока живет db, живет и Request
 * Решение смотри ниже
 */

//var EventEmitter = require('events').EventEmitter;
//
//var db = new EventEmitter();
//
//function Request() {
//    var self = this;
//
//    this.bigDate = new Array(1e6).join('*');
//
//    this.send = function(data) {
//        console.log(data);
//    };
//
//    db.on('data', function(info) {
//        self.send(info);
//    })
//}
//
//setInterval(function() {
//    var request = new Request();
//    console.log(process.memoryUsage().heapUsed);
//}, 200);

var EventEmitter = require('events').EventEmitter;

var db = new EventEmitter();

function Request() {
    var self = this;

    this.bigDate = new Array(1e6).join('*');

    this.send = function(data) {
        console.log(data);
    };

    function onData(info) {
        self.send(info);
    }

    this.end = function() {
        db.removeListener('data', onData)
    };

    db.on('data', onData);
}

setInterval(function() {
    var request = new Request();
    request.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);