let fs = require("fs");
let read1 = fs.createReadStream("e:\\master.nodejs.2ed\\scores.txt", {
	highWaterMark: 10
});
// read1.setEncoding("utf8");
// *readable表明流有了新的状态
let buffer = Buffer.alloc(0);
// *data为主动模式，消耗流
read1.on("data", data => {
	console.log("data");
	let temp = data;
	console.log(temp);
	if (temp) {
		buffer = Buffer.concat([buffer, temp]);
	}
	console.log(buffer.toString(), "buffer");
});
// read1.on("data", () => {
// 	console.log("data");
// });

read1.on("end", () => {
	console.log(buffer.toString(), "111");
	console.log("end");
});
