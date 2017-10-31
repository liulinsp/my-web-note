/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */
(function (window, $) {
  var data = '我是superModule的属性'
  function foo () {
    $('superModule foo() '+data)
  }
  function bar() {
    $('superModule bar() '+data)
    test()
  }

  function test() {
    $('test()')
  }

  //向外暴露行为
  window.superModule = {
    foo, bar
  }
})(window, log)
