/*回调函数*/
var fs = require("fs");

fs.readFile('02-data.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");