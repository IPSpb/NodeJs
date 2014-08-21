/**
 * Created by igor on 29.07.14.
 */
//Закешировали модуль и дальше просто пользуемся без вызова db.connect();
var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    vasya.hello(petya);

    log(db.getPhrase("Run succesful"));
}

// Если модуль запущен явно, то есть node server.js, то делаем run(), если он запущен из другого
// приложения например app.js, то мы его экспортим exports.run.
// То есть модуль работает в режиме модуля
if(module.parent) {
    exports.run = run;
} else {
    run();
}