var fs=require("fs");
//异步
fs.writeFile("./11.txt", "hello", {flag:'w'},function(err){
	console.log("写入hello,err=",err);
	//异步
	fs.writeFile("./11.txt", " word! ", {flag:'a'},function(err){//flag = a 表示追加
		console.log("写入word,err=",err);

		fs.writeFileSync("./11.txt", "你好，世界！", {flag:'a'});//同步
	});

	fs.readFile("./11.txt", function(err,data){
		console.log("不设置options的方式读取,data=",data);
		console.log("不设置options的方式读取,data.toString()=",data.toString());
	});
	fs.readFile("./11.txt", {encoding:'utf-8'}, function(err,data){
		console.log("设置options的encoding='utf-8'方式读取,data=",data);
	});
});





