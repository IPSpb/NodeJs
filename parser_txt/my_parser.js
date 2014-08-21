// Подключение нового файла parser.js
var Parser = require('./parser');

//Загрузка модуля fs
var  fs = require('fs');

// Считывание содержимого файла в память
fs.readFile('example_log.txt', function (err, logData) {

    // Если произошла ошибка, то мы генерируем исключение,
    // и работа приложения завершается.
    if (err) throw err;

    // logData имеет тип Buffer, переводим в string
    var text = logData.toString();

    // Создаем экземпляр Parser
    var parser = new Parser();

    // вызываем функцию парсинга
    console.log(parser.parse(text));
})
