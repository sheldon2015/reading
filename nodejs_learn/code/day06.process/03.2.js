// process.stdin.resume();
console.log("----------", 33333);

const fs = require("fs");

process.stdin.on("data", data => {
	fs.writeFileSync("test.txt", data.toString());
});
