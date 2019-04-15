function test() {
	console.log(1);
	process.nextTick(() => {
		test();
	});
}

test();

function* test() {
	yield Promise.resolve(1);
	yield 2;
}

let g = test();
console.log(g.next());
console.log(g.next());
console.log(g.next());
