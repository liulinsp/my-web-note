define('show', ['message'], function(msg){
	return function(){
		alert(msg.getMessage())
	}
})