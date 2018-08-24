setTimeout(function () {
	console.log('setTimeout')
}, 0)
/*setImmediate(function ( a, b) {
	console.log('setImmediate', a,b)
}, 'aaa', 'bbb');*/
/*process.nextTick(function () {
	console.log('nextTick')
})*/
var obj = {}
Object.observe(obj, function(changes){
	console.log('Object.observe', changes)
})
obj.a = 'aaa'