/**
 * *进程间通讯(IPC)
 */

console.log(process.pid);

process.on("message", msg => {
	process.send("from1  " + msg);
});
