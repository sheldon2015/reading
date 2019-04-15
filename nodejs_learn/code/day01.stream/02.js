/**
 * *可读流readable
 */

const fs = require("fs");
const path = require("path");
const read_stream = fs.createReadStream(
	path.join("F:\\books", "computer.systems.5th.pdf")
);
read_stream.on("close", () => {
	console.log("close--------------");
});

/**
 ** 可读流触发end事件，是在目标流完全消费掉后才会触发
 */

read_stream.on("end", () => {
	console.log("end--------------");
});
read_stream.on("error", data => {
	console.log("error--------------");
	console.log(data);
});
//*绑定不同的事件,不同的流消费模式，流只有消费，才会从不断底层获取数据
//*同事绑定readable和data事件，readable事件的优先级比data高，调用read方法会触发data事件
read_stream.on("data", data => {
	console.log("data--------------");
	console.log(data);
});

read_stream.on("readable", () => {
	console.log("readable--------------");
	let chunk = "";
	while ((chunk = read_stream.read())) {
		console.log(chunk);
	}
});
