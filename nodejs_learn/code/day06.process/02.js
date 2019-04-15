const child_process = require("child_process");
// const child = child_process.spawn("code", ["--version"]);
// child.on("error", console.error);
// child.stdout.on("data", console.log);

// console.log(process.env.path.split(";").join("\n"));

child_process.exec("code .", (error, stdout, stderr) => {
	console.log(error);
	console.log(stdout);
	console.log(stderr);
});
