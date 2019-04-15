/**
 **child_process处理外部程序
 *!提供了四中方法
 **1.execFile
 */
const child_process = require("child_process");

// *当执行的命令不在的时候跑出'ENOENT'的错误

child_process.execFile("ipconfig", ["/all"], (err, stdout, stderr) => {
	console.log("1111111", err);
	console.log(stdout);
	console.log("22222", stderr);
});

// *在命令行解释器运行下面的命令

child_process.exec("echo  1111 >test.txt", (err, stdout, stderr) => {
	console.log("3333", err);
	console.log(stdout);
	console.log("4444", stderr);
});
// *返回的一个子进成对象
const child = child_process.spawn("ipconfig", ["/all"]);
child.on("error", console.error);
child.stdout.on("data", console.log);
