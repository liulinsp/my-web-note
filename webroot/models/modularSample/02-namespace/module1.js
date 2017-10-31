/**
 * namespace模式: 简单对象封装
 * 作用: 减少了全局变量
 * 问题: 不安全(数据不是私有的, 外部可以直接修改)
 */
var myModule = {
  data: '我是myModule的属性',
  foo() {
    show('foo() '+this.data)
  },
  bar() {
    show('bar() '+this.data)
  }
}

