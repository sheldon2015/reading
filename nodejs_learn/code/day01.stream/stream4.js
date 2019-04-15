const Readable = require("stream").Readable;
const Writable = require("stream").Writable;

const rs = new Readable();
const ws = new Writable({
	// *实现自己的写入的流
	write(chunk, encoding, cb) {
		console.log(chunk);
		cb();
	}
});
ws.end = () => {
	console.log("ws call  end func");
};

process.nextTick(() => {
	rs.push("aaaaaaa");
	rs.unshift("1");
	rs.push(null);
});
// * pip的方法参数最后end默认为true，当可读流结束时会调用可写流的end方法,表明可写流结束
rs.pipe(
	ws,
	{ end: false }
);
