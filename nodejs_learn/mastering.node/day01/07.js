const http = require("http");
const net = require("net");
const url = require("url");
const proxy = new http.Server();
// *服务端收到请求
proxy
	.on("connect", (request, clientSocket, head) => {
		console.log(11111111111111);
		let reqData = url.parse(`http://${request.url}`);
		let remoteSocket = net.connect(
			reqData.port,
			reqData.hostname,
			() => {
				console.log(3333333333333);
				clientSocket.write("HTTP/1.1 200 \r\n\r\n");
				remoteSocket.write(head);
				remoteSocket.pipe(clientSocket);
				clientSocket.pipe(remoteSocket);
			}
		);
	})
	.listen(8080);
// *客户端
let request = http.request({
	port: 8080,
	hostname: "localhost",
	method: "CONNECT",
	path: "www.example.org:80"
});
request.end();
// *客户端收到响应
request.on("connect", (res, socket, head) => {
	console.log(2222222222222);
	socket.setEncoding("utf8");
	socket.write(
		"GET / HTTP/1.1\r\nHost: www.example.org:80\r\nConnection: close\r\n\r\n"
	);
	socket.on("readable", () => {
		console.log(socket.read());
	});
	socket.on("end", () => {
		proxy.close();
	});
});
