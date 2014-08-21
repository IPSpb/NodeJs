//Конструктор парсера
var Parser = function() {

};

// Обрабатывает переданный текст
Parser.prototype.parse = function(text) {

    var results = {};

    //Разбивает текст на строки
    var lines = text.split('\n');

    lines.forEach(function(line){
        var parts = line.split(' ');
        var letter = parts[1];
        var count = parseInt(parts[2]);

        if(!results[letter]) {
            results[letter] = 0;
        }

        results[letter] += parseInt(count);
    })

    return results;
};

// Выносит конструктор парсера в модуль
module.exports = Parser;