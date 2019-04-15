const fork = require("child_process").fork;
const path = require("path");
const fs = require("fs");
const child = fork(path.join(__dirname, "./02.js"));
console.log("父进程ID", process.pid);
child.on("message", mes => {
	console.log(mes);
});
child.send("ni hao", () => {
	console.log("从父进程向子进程");
	console.log("子进程ID", child.pid);
});
