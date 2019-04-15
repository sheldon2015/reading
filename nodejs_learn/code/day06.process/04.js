/**
 * *进程间通讯(IPC)
 * *在父进程中保持有子进程的句柄
 */
const child_process = require("child_process");
const path = require("path");
const child = child_process.fork(path.join(__dirname, "04.1.js"));

child.on("message", msg => {
	console.log("superabc ", msg);
});

child.on("error", console.log);

child.send("from super " + 11);

const os = require("os");
console.log(os.platform());

const { EventEmitter } = require("events");

class A extends EventEmitter {
	constructor(props) {
		super(props);
	}
}

const a = new A();

a.on("test", () => {
	console.log(111);
}).emit("test");
