/**
 * 格式化一点自己用的小文件
 */
var fs = require("fs");

fs.readFile('in.txt', 'utf8', function (err, data) {
    // data = data.replace(/ \r\n/g, "\r\n");
    // data = data.replace(/\r\n /g, "\r\n");
    data = data.replace(/ /g, "");
    data = data.replace(/\r\n\r\n\r\n/g, "\r\n");


    data = data.replace(/\r\n#/g, "\r\n\r\n#");
    data = data.replace(/\r\n留言/g, "\r\n\r\n留言");

    data = data.replace(/ > /g, ">");
    data = data.replace(/>/g, " > ");
    data = data.replace(/-/g, "- ");
    data = data.replace(/“/g, "“ ");
    data = data.replace(/”/g, " ”");

    fs.writeFile('out.txt', data, function (err) {
        if (err) {
            return console.error(err);
        }
    });
});

console.log("All Done!!!");