const fs = require("fs");
const path = require("path");

fs.readFile(__filename, (err, chunk) => {
	console.log(chunk.toString());
});
