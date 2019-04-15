/**
 * *包装数据源
 */

const fs = require("fs");
const path = require("path");
const { Readable } = require("stream");
const read_stream = fs.createReadStream(path.join(__dirname, "./01.txt"), {
	encoding: "utf8"
});

class JSONparser extends Readable {
	constructor(source) {}
	_read() {}
}

const json_parser = new JSONparser(read_stream);
