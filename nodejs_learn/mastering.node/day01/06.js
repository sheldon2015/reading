/**
 * *writeable流
 * *可写流是对数据要被写入目的的的一种抽象
 * *可读流是对提供数据源的一种抽象
 */

const Writable = require("stream").Writable;

const writer = new Writable({
	decodeStrings: false,
	highWaterMark: 2,
	write(chunk, encoding, cb) {
		console.log(chunk);
		// *错误则传递错误信息
		cb();
	}
});
writer.on("drain", err => {
	console.log(err);
	console.log("drain");
});
writer.on("error", err => {
	console.log(err, 111);
});
writer.write("abc");
