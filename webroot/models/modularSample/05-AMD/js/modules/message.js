define('message', ['jquery'], function($){
	return {
		getMessage : function(){
			return $('#name').val();
		}
	}
})