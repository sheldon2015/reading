function* get() {
	yield setTimeout(function() {
		it.next();
	});

	console.log(111);
}

let it = get();

it.next();
