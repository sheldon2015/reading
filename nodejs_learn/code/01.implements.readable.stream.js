let Readable = require("stream").Readable;
// Make our own readable stream, named r
let r = new Readable({ highWaterMark: 8 });
// Start the count at 0
let count = 0;
// Downstream code will call r's _read function when it wants some data from r
r._read = function() {
	console.log(1111111111111111111111);
	count++;
	if (count > 10) {
		// After our count has grown beyond 10
		return r.push(null); // Push null downstream to signal we've got no more data
	}

	setTimeout(() => r.push("a" + "\n"), 500); // A half second from now, push our
};
// Have our readable send the data it produces to standard out

r.on("readable", () => {
	console.log("readable");
	//  let data = r.read();
	// console.log(data);
});

r.on("end", () => {
	console.log("end");
});

// !内部会去调用_read()
// r.pipe(process.stdout);
