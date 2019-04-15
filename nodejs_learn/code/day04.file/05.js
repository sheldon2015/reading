//
/*
 * 文件监听
 * fs.watchFile  通关过轮询
 * fs.watch 不跨平台，处理速度快，通过libuv
 */

const fs = require("fs");

fs.watch(__filename, (err, res) => {
	console.log(res);
});

fs.watchFile(__filename, console.log);
