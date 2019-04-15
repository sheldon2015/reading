const fs = require("fs");
const path = require("path");
const writer = fs.createWriteStream(path.join(__dirname, "test2.txt"));
console.log(
	"1 ----",
	writer.writableBuffer.length,
	"   ",
	writer.writableLength
);
writer.cork();
console.log(
	"2 ----",
	writer.writableBuffer.length,
	"   ",
	writer.writableLength
);
writer.write("aa ");
console.log(
	"3 ----",
	writer.writableBuffer.length,
	"   ",
	writer.writableLength
);
writer.write("bbccccccccccccccc ");
console.log(
	"4 ----",
	writer.writableBuffer.length,
	"   ",
	writer.writableLength
);
process.nextTick(() => {
	console.log(
		"5 ----",
		writer.writableBuffer.length,
		"   ",
		writer.writableLength
	);
	// writer.uncork();
	console.log(
		"6 ----",
		writer.writableBuffer.length,
		"   ",
		writer.writableLength
	);
});
