/*全局对象*/
//1. _filename : 表示当前正在执行的脚本的文件名
console.log("__filename = ",__filename);

//2. __dirname :  表示当前执行脚本所在的目录
console.log("__dirname = ",__dirname);

//3. setTimeout(cb, ms)
setTimeout(function(){console.log("2秒定时")}, 2000);

//4. setInterval(cb, ms)
var timer = setInterval(function(){console.log("1秒循环")}, 2000);
setTimeout(function(){timer.close();console.log("1秒循环停止")}, 5000);

/*5. process 用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。*/
process.on('exit', function(code) {

  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
  
  console.log('退出码为:', code);
});

process.stdout.write("Hello World!" + "\n");
console.log("process.pid = ",process.pid);
console.log("process.platform = ",process.platform);
console.log("process.execPath = ",process.execPath);
console.log('当前目录process.cwd()= ' + process.cwd());
// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log('参数'+index + ': ' + val);
});
console.log("内存使用情况process.memoryUsage() = ",process.memoryUsage());