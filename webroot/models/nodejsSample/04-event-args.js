/*事件参数*/
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) { 
	console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
	console.log('listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 