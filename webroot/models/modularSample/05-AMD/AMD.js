// 简单实现AMD
var factories = {}
function define (moduleName, dependencies, factory) {
    factory.dependencies = dependencies;
    factories[moduleName] = factory;
}
function require (mods, callback) {
    var result = mods.map(function (mod) {
        var exports = null;
        var factory = factories[mod];
        var dependencies = factory.dependencies;
        require(dependencies, function () {
            exports = factory.apply(null, arguments);
        })
        return exports;
    })
    callback.apply(null, result);
}

// 使用
define('module1', [], function () {
    return 2;
})
define('module2', ['module1'], function (module1) {
    return module1 + 2;
})
require(['module1', 'module2'], function (module1, module2){
    console.log('module1=', module1);
    console.log('module2=', module2);
})