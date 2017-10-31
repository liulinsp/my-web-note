define(function(require, exports, module) {
	require('jquery');
	exports.getMessage = function(){
		return $('#name').val();
	}
})