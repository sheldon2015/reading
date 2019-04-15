/**
 * *文件夹的拷贝和删除
 */

const path = require("path");
const fs = require("fs");
const { URL } = require("url");
// const url = new URL("file://192.168.0.20/static/README.txt");
// const s = fs.readFileSync(url);
// const url2 = new URL("file://192.168.0.20/static/test.txt");
// console.log(url);
// fs.writeFileSync(url2, s);
function copy(src, dest) {
	const files = fs.readdirSync(path.join(__dirname, src), {
		withFileTypes: true
	});
	// *不存在dest目录，就创建目录

	if (!fs.existsSync(new URL(dest))) {
		fs.mkdirSync(new URL(dest));
	}
	for (const item of files) {
		// *一个文件
		if (item.isFile()) {
			let s = fs.readFileSync(path.join(__dirname, src, item.name));
			fs.writeFileSync(new URL(dest + "/" + item.name), s);
		} else {
			// *一个目录
			copy(path.join(src, item.name), dest + "/" + item.name);
		}
	}
}

copy("./day01", "file://192.168.0.20/static/day02");
