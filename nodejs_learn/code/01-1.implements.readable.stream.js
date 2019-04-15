let stream = require("stream");
let Feed = function(channel) {
	let readable = new stream.Readable({ highWaterMark: 1 });
	let news = ["Big Win!", "Stocks Down!", "Actor Sad!"];
	readable._read = () => {
		// *从数据源读取到到缓冲区
		if (news.length) {
			return readable.push(news.shift() + "\n");
		}
		readable.push(null);
	};
	return readable;
};
let feed = new Feed();
feed.on("readable", () => {
	console.log("11111");
	let data = feed.read(); //!read方法消费流
	console.log("1111111111111111111");
	data && process.stdout.write(data);
});
feed.on("end", () => console.log("No more news"));
