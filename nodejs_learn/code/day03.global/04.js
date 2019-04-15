/*
 * process对象
 * timer对象
 * 简单的命令行程序
 */

process.stdin.resume(); //*可以保持系统进程不退出
process.on("SIGHUP", () => {
	console.log("reloading the config");
});

console.log(process.pid);

setTimeout(() => {
	console.log(this);
});

setTimeout(
	function() {
		console.log(this);
	}.bind(this)
);

const id = setInterval(() => {
	console.log(11111);
}, 1000);
//*调用下面的函数表明不需要事件循环保持活动,
//*默认情况下,timer都是保持事件循环处于事件循环活动状态的
id.unref();

//*通常一个事件会在一个一步操作触发

process.nextTick(() => {
	console.log(22222222222222);
});
