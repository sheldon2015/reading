/**
 * *同步进程
 */

const child_process = require("child_process");
// const path = require("path");
// const s = child_process.execFileSync("node", [
// 	path.resolve(__dirname + "/04.2.2")
// ]);

// console.log(s.toString());

const path = require("path");

// const nv = child_process.spawnSync("node", ["--version"]);
// const ec = child_process.spawnSync("echo", [path.join(__dirname, "./test.txt")], {
// 	input: nv.stdout
// });
// console.log(nv);

// console.log(ec);

child_process.execSync("ipconfig /all> echo >test.txt");
