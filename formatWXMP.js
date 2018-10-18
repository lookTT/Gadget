/**
 * 格式化一点自己用的小文件
 */
var fs = require("fs");

fs.readFile('in.txt', 'utf8', function (err, data) {
    data = data.replace(/\r\n \r\n\r\n/g, "\r\n");
    data = data.replace(/\r\n#/g, "\r\n\r\n#");

    fs.writeFile('out.txt', data, function (err) {
        if (err) {
            return console.error(err);
        }
    });
});