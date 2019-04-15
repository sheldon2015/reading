/**
 * *可读流readable
 */

const fs = require("fs");
const path = require("path");
const read_stream = fs.createReadStream(__filename);



read_stream
	.on("end", () => {
		console.log("end--------------");
	})

	.on("readable", chunk => {
		console.log("readable");
		read_stream.read();
	});
