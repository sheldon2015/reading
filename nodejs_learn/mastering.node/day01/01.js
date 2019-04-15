const path = require("path");
const fs = require("fs");
// const url = new URL("file://192.168.0.20/static/README.txt");
// const s = fs.readFileSync(url);
// const url2 = new URL("file://192.168.0.20/static/test.txt");
// console.log(url);
// fs.writeFileSync(url2, s);

function copy(src, dest) {
	const files = fs.readdirSync(path.join(src), { withFileTypes: true });
	console.log(files);
	// *不存在dest目录，就创建目录
	if (!fs.existsSync(path.join(dest))) {
		fs.mkdirSync(dest);
	}
	for (const item of files) {
		// *一个文件
		if (item.isFile()) {
			let s = fs.readFileSync(path.join(src, item.name));
			fs.writeFileSync(path.join(dest, item.name), s);
		} else {
			// *一个目录
			copy(path.join(src, item.name), path.join(dest, item.name));
		}
	}
}

copy(__dirname, "./day02");
