const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;
console.log(numCPUs);
if (cluster.isMaster) {
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
}
if (cluster.isWorker) {
	http
		.createServer((req, res) => {
			res.writeHead(200);
			res.end(`Hello from ${cluster.worker.id}`);
		})
		.listen(8080);
}
