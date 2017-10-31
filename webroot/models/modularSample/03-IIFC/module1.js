/**
 * IIFE模式: 匿名函数自调用(闭包)
 * IIFE : immediately-invoked function expression(立即调用函数表达式)
 * 作用: 数据是私有的, 外部只能通过暴露的方法操作
 * 问题: 如果当前这个模块依赖另一个模块怎么办?
 */
(function (window) {
  var data = '我是module1的属性'
  function foo () {
    show('module1 foo() '+data)
  }
  function bar() {
    show('module1 bar() '+data)
    test()
  }

  function test() {
    show('test()')
  }

  //向外暴露行为
  window.myModule = {
    foo, bar
  }
})(window)
