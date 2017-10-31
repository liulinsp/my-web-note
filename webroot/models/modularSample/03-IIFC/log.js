(function(){
	function show(msg){
	  var showDiv = document.getElementById('showResult2');
	  showDiv.innerHTML += '<p>'+msg+'</p>'
	}
	window.log = show
})()