/*
 * process对象
 * 简单的命令行程序
 */

const args = {
	"-h": () => {
		console.log("help");
	}
};
process.argv.forEach((arg, index) => {
    args[arg] && args[arg].apply();
});
process.exit(1);

