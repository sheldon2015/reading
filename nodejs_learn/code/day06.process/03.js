/**
 * *spawn的进程对象可以依附于主进程也可以独立于主进程
 */

const child_process = require("child_process");
const path = require("path");
const child = child_process.spawn("node", [path.join(__dirname, "./03.2.js")], {
	// *创建分离的子进程
	detached: false,
	stdio: ["pipe", "pipe", "ignore"]
});

child.on("error", console.log);

child.stdin.write(Buffer.from("abcdqqqqqqqq"));

// * 在父进程拿到子进程的句柄
child.stdout.on("data", data => {
	console.log("2", data.toString());
});

const child2 = child_process.spawn(path.join(__dirname, "./test.bat"), ["--version"]);
child2.on("error", console.log);
child2.stdout.pipe(process.stdout);
