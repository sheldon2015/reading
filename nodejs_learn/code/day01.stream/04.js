const { Readable } = require("stream");
class MyStream extends Readable {
	constructor(options) {
		super(options);
	}
	_read(size) {
		console.log("_read");
		// console.log("reading _read", my_stream._readableState.reading);
		console.log(this.push("a"));
		console.log(this.push("a"));
		console.log(this.push("a"));
		console.log(this.push("a"));
		console.log(this.push("a"));
		console.log(this.push("a"));
		console.log(this.push("a"));
		console.log("readableBuffer", this.readableBuffer);
	}
}

const my_stream = new MyStream({ highWaterMark: 4 });
my_stream.on("readable", () => {
	console.log("readable");
	console.log(my_stream.read());
	// console.log("reading readable", my_stream._readableState.reading);
});
