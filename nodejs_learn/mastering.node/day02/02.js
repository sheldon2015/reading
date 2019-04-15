const fs = require("fs");
process.on("message", data => {
	process.send('reader', () => {
		console.log("从子进程向父进程");
	});
});
