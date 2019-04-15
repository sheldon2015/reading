const fs = require("fs");

fs.readdir(__dirname, (err, dir) => {
	if (!err) {
		console.log(dir);
	}
});

fs.watch(__dirname, (err, info) => {
	console.log(info);
});

const config = require("./config");
console.log(config);
console.log(require.extensions);
