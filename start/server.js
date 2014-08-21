/**
 * Created by igor on 29.07.14.
 */

var user = require('./user');

var vasya = new user.User("Вася");
var petya = new user.User("Петя");

vasya.hello(petya);