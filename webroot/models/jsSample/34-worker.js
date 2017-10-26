function fibonacci(n) {
  return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2)
}
var onmessage = function (event) {
  var num = event.data
  // alert(number) //不能在分线程更新UI
  console.log('分线程接收到消息 '+num)
  var result = fibonacci(num)
  postMessage(result)
}