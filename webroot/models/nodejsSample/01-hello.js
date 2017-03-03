var http = require("http");  
  
http.createServer(function(request, response) {  
  response.writeHead(200, {"Content-Type": "text/plain"});  
  response.write("Hello World");  
  response.end();  
}).listen(8888);  
  
console.log("Server running at http://127.0.0.1:8888/");  
/*Sublime中ctrl+B执行*/
/*cmd命令行进入文件所在目录后执行：node 01-hello.js*/