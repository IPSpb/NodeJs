/**
 * Демо простейшего применения EE
 * Аргументы передаются по цепочке
 * обработчики срабатывают в том же порядке, в котором назначены
 * emit(event, args..)->on(event,args...)
 * emit(error) без обработчиков -> throw
 *
 */

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function(request) {
   request.approved = true;
});

server.on('request', function(request) {
   console.log(request);
});

server.emit('request', {from: "Клиент"});

server.emit('request', {from: "Еще Клиент"});