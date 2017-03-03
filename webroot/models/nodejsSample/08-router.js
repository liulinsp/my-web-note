/*路由*/
var http = require("http"); 
var url = require("url"); 
var querystring = require('querystring');
  
http.createServer(function(request, response) {
  console.log("request.url=",request.url);
  var pathname = url.parse(request.url).pathname;
  console.log("pathname=",pathname);
  var query = url.parse(request.url).query;
  console.log("query=",query);
  var queryObj = querystring.parse(query);
  console.log("queryObj=",queryObj);

  response.writeHead(200, {"Content-Type": "text/plain"});  
  response.write("Hello World");  
  response.end();  
}).listen(8888);  
  
console.log("Server running at http://127.0.0.1:8888/"); 