/**
 * *writeable流
 * *可写流是对数据要被写入目的的的一种抽象
 * *可读流是对提供数据源的一种抽象
 */

const fs = require("fs");
const path = require("path");
const writer = fs.createWriteStream(path.join(__dirname, "test3.txt"));
writer.on("finish", () => {
	console.log("finish");
});

writer.on("close", () => {
	console.log("close");
});

writer.on("drain", () => {
	console.log("drain");
});

function write() {
	writer.write("baaaaaaaaaa", () => {
		console.log(2);
		console.log(
			"sum ----",
			writer.writableBuffer.length,
			"   ",
			writer.writableLength
		);
	});
}

write();
