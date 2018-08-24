// 简单实现CommmonJS
var fs = require('fs');
function myRequire (fileName) {
    var content = fs.readFileSync(fileName);
    var fn = new Function('module', 'exports', 'require',
        '__dirname', '__filename',
        content + '\n return module.exports');
    var module = { exports: {}};
    return fn(module, module.exports, myRequire, __dirname, __filename);
}

// 使用
var add = myRequire('./module1.js');
var obj = myRequire('./module2.js');
console.log('add(2,3) --> ', add(2,3))
console.log('obj.circle(10) -->',obj.circle(10))