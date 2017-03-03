/*error事件*/
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var emitter = new events.EventEmitter();
emitter.emit("error","连接失败");