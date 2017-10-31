/**
 * 全局函数模式: 将不同的功能封装成不同的全局函数
 * 问题: Global被污染了, 很容易引起命名冲突
 *  数据和行为都不是私有的
 */
//数据(应该是私有的)
var data = '我是module1的变量'
//操作数据的行为
function foo () {
  show('module1 foo() '+data)
}
function bar() {
  show('module1 bar() '+data)
}