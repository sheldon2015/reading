/*
 *递归文件操作(粗放型)
 */

const fs = require("fs");
const path = require("path");
const { join } = path;
const dir = fs.readdirSync(__dirname);
console.log(dir);
const nameRe = /^01.js$/;
const results = [];

function find() {
	for (const item of dir) {
		const path = join(__dirname, item);
		const stats = fs.statSync(path);
		if (stats.isDirectory()) {
			arguments.callee.call();
		} else {
			if (stats.isFile() && nameRe.test(item)) {
				results.push(path);
			}
		}
	}
}

find();
console.log(results);

