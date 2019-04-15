function walk(arg, cb) {
	console.log(arg);
	cb("测试", arg);
}

walk("test callback", (err, data) => {
	console.log(err);
	console.log(data);
});

const fs = require("fs");

const info = fs.statSync(".");
console.log(info);
