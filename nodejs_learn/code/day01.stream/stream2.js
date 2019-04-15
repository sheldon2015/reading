var Readable = require("stream").Readable;

var rs = new Readable({ highWaterMark: 1 });
console.log("nextTick");
process.nextTick(() => {
	rs.push("a");
	console.log(1);
	rs.push("boop\n");
	console.log(2);
	rs.push("boop\n");
	console.log(2);
	rs.push("");
	rs.push(null);
	console.log(3);
});

rs.on("data", chunk => {
	console.log("data");
	console.log(chunk);
	// console.log("read", rs.read());
});

rs.on("end", chunk => {
	console.log("end");
	console.log(chunk);
	// console.log("read", rs.read());
});
// rs.on("readable", () => {
// 	console.log("readable");

// 	let chunk = "";
// 	while ((chunk = rs.read()) !== null) {
// 		console.log("11111111111");

// 		console.log(chunk);
// 	}
// });
