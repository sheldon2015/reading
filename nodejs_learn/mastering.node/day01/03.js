/**
 * *writeable流
 * *可写流是对数据要被写入目的的的一种抽象
 * *可读流是对提供数据源的一种抽象
 */

const fs = require("fs");
const path = require("path");
const writer = fs.createWriteStream(path.join(__dirname, "test.txt"));
writer.on("finish", () => {
	console.log("finish");
});

writer.on("close", () => {
	console.log("close");
});

let i = 10000;
function write() {
	let flag = true;
	while (flag && i > 0) {
		i--;
		if (i == 0) {
			writer.write(
				"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
				() => {
					console.log(1);
					console.log(
						"sum ----",
						writer.writableBuffer.length,
						"   ",
						writer.writableLength
					);
				}
			);
			// writer.end();
		} else {
			flag = writer.write(
				"baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
				() => {
					console.log(2);
					console.log(
						"sum ----",
						writer.writableBuffer.length,
						"   ",
						writer.writableLength
					);
				}
			);
		}
		console.log(
			"sum ----",
			writer.writableBuffer.length,
			"   ",
			writer.writableLength,
			flag
		);
	}
	if (i > 0) {
		writer.once("drain", () => {
			console.log("drain");
			write();
		});
	}
}

write();
