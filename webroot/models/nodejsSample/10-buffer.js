//创建指定长度的缓存
var buf1 = new Buffer(64);
console.log("buf1.length=",buf1.length);

//创建指定内容的缓存
var str = "hello world!";
var buf2 = new Buffer(str);
console.log("buf2.toString()=",buf2.toString());

console.log("buf2=",buf2);
buf2.fill(0);
console.log("buf2.fill(0); --> buf2=",buf2);
