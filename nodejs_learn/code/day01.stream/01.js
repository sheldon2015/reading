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
	constructor(source) {
		super();
		this._source = source;
		this._buffer = "";
		this._i = 0;
		this._source.on("readable", () => {
			console.log(
				"-------------------------------------------------------------"
			);
			console.log(this.read());
		});
	}
	_read() {
		console.log("执行次数----", ++this._i);
		if (this._buffer.length === 0) {
			console.log(
				"buffer中的内容------\n",
				(this._buffer = this._source.read() || "")
			);
		}
		let index = this._buffer.indexOf("\n");
		console.log("换行符的位置---", index);
		let result_every_line;
		if (index !== -1) {
			result_every_line = this._buffer.slice(0, index);
			// *剩余的buffer
			this._buffer = this._buffer.slice(index + 1);
		} else {
			result_every_line = this._buffer.slice(0);
			this._buffer = "";
		}

		this.emit("object", result_every_line);
		// *push到包装流的buffer中
		if (result_every_line) {
			console.log('push---',this.push(result_every_line));
		}
	}
}

const json_parser = new JSONparser(read_stream);
json_parser.on("object", data => {
	console.log("--------------------", data);
});
