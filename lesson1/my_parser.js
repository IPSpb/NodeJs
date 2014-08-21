// Загрузка модуля fs (файловая система)
var fs = require('fs');

// Считываем сщдержимого файла в память
fs.readFile('example_log.txt', function (err, logData) {

    // Если произошла ошибка, то мы генерируем исключение,
    // и работа приложения завершается.
    if (err) throw err;

    // logData имеет тип Buffer, переводим в string
    var text = logData.toString();

    var results = {};

    // Разбивка файла по строкам
    var lines = text.split('\n');

    lines.forEach(function(line) {
        var parts = line.split(' ');
        var letter = parts[1];
        var count = parseInt(parts[2]);

        if(!results[letter]) {
            results[letter] = 0;
        }

        results[letter] += parseInt(count);
    });

    console.log(results);
})