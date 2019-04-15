// class B {
// 	constructor(arg) {
// 		console.log("bbbbbb");
// 		this.b = arg;
// 	}
// 	show() {
// 		console.log("B", this.b);
// 	}
// }

// class A extends B {
// 	constructor(arg) {
// 		console.log("aaaaa");
// 		super(arg);
// 	}

// 	show() {
// 		console.log("A", this.b);
// 	}
// 	show_super() {
// 		super.show();
// 	}
// }

// const s = new A(1);
// s.show();
// s.show_super();

const http = require("http");
http
	.createServer((rq, rs) => {
		rs.end("1");
	})
	.listen(80, "192.168.0.111");

