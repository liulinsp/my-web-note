console.log('test')
document.addEventListener('load',function(){
	console.log('load1', new Date())
});
document.onload = function(){
	console.log('load2', new Date())
}
document.addEventListener('DOMContentLoaded',function(){
	console.log('DOMContentLoaded', new Date())
});