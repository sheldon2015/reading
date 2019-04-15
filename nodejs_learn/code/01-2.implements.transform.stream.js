const stream = require("stream");
// *转换流
let converter = new stream.Transform();
converter._transform = function(num, encoding, cb) {
	console.log(this);
	converter.push(String.fromCharCode(Number(num)) + "\n");
	cb();
};
process.stdin.pipe(converter).pipe(process.stdout);
