var Readable = require("stream").Readable;

var rs = new Readable({ highWaterMark: 2 });

process.nextTick(() => {
	rs.push("aaaaaaa");
	rs.unshift("1");
	rs.push(null);
});

rs.on("data", chunk => {
	console.log("data");
	console.log(chunk);
});

rs.on("end", chunk => {
	console.log("end");
});
