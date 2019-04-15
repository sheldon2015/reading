const stream = require("stream");

const read_stream = new stream.Readable({
	read() {
		console.log("read data  from source into buffer");
		console.log(this.push("a"));
		console.log(this.push("b"));
		console.log(this.unshift(Buffer.from("c")));
		console.log(this.push(null));
	}
});
read_stream.push('qqqqqqqqqqqqqqqqqq')
read_stream.on("readable", data => {
	console.log("readable");
	console.log(read_stream.read());
});
read_stream.on("end", () => {
	console.log("end");
});

read_stream.on("close", () => {
	console.log("close");
});
