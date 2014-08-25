/**
 * Наследование от ошибок Error
 * Запуск node error.js
 * Создаем разные классы, для вывода разных ошибок
 * в строках 48, 52 можно допускать ошибки
 */
var util = require('util');

var phrases = {
    "Hello" : "Привет",
    "world" : "мир"
};

/**
 * Создаем конструктор для класса PhraseError, он будет выводить уведомления по ошибке HTTP 500
 * Наследуем его от класса Error и задаем имя
*/
function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError); // Для вывода стека, второй параметр для того чтоб исключить PhraseError из стека
}
util.inherits( PhraseError, Error );
PhraseError.prototype.name = 'PhraseError';

/**
 * Создаем конструктор для класса PhraseError, он будет выводить уведомления по ошибке HTTP 400
 * Наследуем его от класса Error и задаем имя
 */
function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError("Нет такой фразы: " + name); // HTTP 500, уведомления!
    }
    return phrases[name];
}

function makePage(url) {
    if(url != 'index.html') {
        throw new HttpError(404, "Нет такой страницы"); // HTTP 404
    }
    return util.format("%s, %s", getPhrase("****"), getPhrase("world"));
}

try {
    var page = makePage('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error("Ошибка %s\n  сообщение: %s\n стек: %s", e.name, e.message, e.stack);
    }
}