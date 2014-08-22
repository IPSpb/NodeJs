/**
 * Запуск node format.js
 * format получает строку и вместо %s будет выведена строка, вместо %d число, происходит конвертация
 * можно это все написать в consol.log там все будет конвертироваться автоматически console.log("My %s %d %j", "string", 123, {test: "obj"});
 */
var util = require('util');

var str = util.format("My %s %d %j", "string", 123, {test: "obj"});

console.log(str);