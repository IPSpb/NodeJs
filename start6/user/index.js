//exports
var db = require('db'); // Локализация
var log = require('logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    log(db.getPhrase("Hello") + ", " + who.name);
}
//
//console.log("user.js is required!");

//Выдать наружу функцию но не объект
module.exports = User;
// Выдать наружу объект
//exports.User = User;

//global.User = User;

