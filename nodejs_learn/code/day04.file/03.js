/*
 *锁的概念(当同时访问资源时涉及到锁的概念)
 *文件锁
 *'O_EXCL':独占标记(可能有兼容性问题，可以使用mkdir方法创建独占锁)
 */

process.stdin.resume();
const fs = require("fs");

fs.openSync("config.lock", "wx");
fs.writeFileSync("config.lock", process.pid, { flag: "wx" });
