/**
 *
 */
var fs = require('fs');

//fs.readFile(__filename, {encoding: 'utf-8'}, function(err, data) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log( data.toString() ); // преобразование в строку иначе вывод буфера
//
//    }
//});

fs.writeFile("file.tmp", "data", function(err) {
   if (err) throw err;

    fs.rename("file.tmp", "new.tmp", function(err) {
        if(err) throw err;

        fs.unlink("new.tmp", function(err) {
            if(err) throw err;
        });
    });
});