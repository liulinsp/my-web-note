(function outer(modules, cache, entry) {
  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        var currentRequire  = typeof require == "function" && require;
        if (!jumped && currentRequire ) return currentRequire (name, !0);
        if (previousRequire) return previousRequire(name, !0);
        var err = new Error("Cannot find module '" + name + "'");
        throw err.code = "MODULE_NOT_FOUND", err
      }
      var m = cache[name] = {exports: {}};
      modules[name][0].call(m.exports, function (x) {
        var id = modules[name][1][x];
        return newRequire(id ? id : x)
      }, m, m.exports, outer, modules, cache, entry)
    }
    return cache[name].exports
  }

  var previousRequire = typeof require == "function" && require;
  for (var i = 0; i < entry.length; i++) newRequire(entry[i]);
  return newRequire
})({
  1: [function (require, module, exports) {
      var add = require('./module1.js');
      var obj = require('./module2.js');
      console.log('add(2,3) --> ', add(2, 3))
      console.log('obj.circle(10) -->', obj.circle(10))
    },
    {"./module1.js": 2, "./module2.js": 3}
  ],
  2: [function (require, module, exports) {
      module.exports = function add(a, b) {
        return a + b;
      }

    },
    {}
  ],
  3: [function (require, module, exports) {
      const PI = 3.1415926;
      exports.circle = function (r) {
        return 2 * PI * r;
      }
    },
    {}
  ]
}, {}, [1])
