const { Readable } = require("stream");
class MyStream extends Readable {
	constructor(options) {
		super(options);
	}
	_read(size) {
		console.log("_read");
		console.log(this.push("a"));
		console.log("readableBuffer", this.readableBuffer);
	}
}

const my_stream = new MyStream({ highWaterMark: 4 });
my_stream.on("readable", () => {
	console.log("readable-------------------------------------");
});
