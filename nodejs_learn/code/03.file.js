const fs = require("fs");
fs.watch(__filename, { persistent: true }, (event, filename) => {
	console.log(event);
	console.log(filename);
});
setImmediate(function() {
	fs.rename(__filename, __filename + ".new", () => {});
});

class Test {
	constructor(a) {
		this.test = a;
	}
}
