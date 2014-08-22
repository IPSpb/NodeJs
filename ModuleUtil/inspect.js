/**
 * Предназначен для красивого вывода объекта
 * В терминале запускаем: node inspect.js
 * Метод console вызывает его внутри можно и так console.log( obj );
 */
var util = require('util');

var obj = {
    a: 5,
    b: 6
//    ,inspect: function() {
//        return 123;
//    }
};
obj.self = obj;

console.log( util.inspect(obj) );