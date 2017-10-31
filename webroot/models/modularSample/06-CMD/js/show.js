define(function(require, exports, module) {
	var msg = require('./message');
	module.exports = function(){
		alert(msg.getMessage())
	}
})