/*路由*/
var http = require("http"); 
var url = require("url"); 
var querystring = require('querystring');
  
http.createServer(function(request, response) {
  console.log("request.url=",request.url);
  var pathname = url.parse(request.url).pathname;
  console.log("pathname=",pathname);
  var query = url.parse(request.url).query;
  console.log("query字符串=",query);
  var queryObj = url.parse(request.url,true).query;
  console.log("query对象=",queryObj);
  var queryObj2 = querystring.parse(query);
  console.log("querystring解析的query对象=",queryObj2);


  //response.writeHead(200, "成功",{"Content-Type": "text/html"});// 直接写入，以后不能改
  response.setHeader("content-type","text/html;charset=utf8");//放入缓存，可更改

  var headerVal = response.getHeader("content-type");//获得响应报文头部字段值
  console.log('response.getHeader("content-type")=',headerVal);

  response.removeHeader("content-type");//删除响应报文头部字段值

  //response.statusCode=500; //设置状态返回码

  response.write("<h1>Hello World!你好世界！</h1>");  
  response.end();  
}).listen(8888);  
  
console.log("Server running at http://127.0.0.1:8888/"); 