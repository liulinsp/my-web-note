define(function(require, exports, module) {
	require('jquery');
	console.log('$=', $);
	var show = require('./show')
	$('button').click(function(){
		show();
	})
});
