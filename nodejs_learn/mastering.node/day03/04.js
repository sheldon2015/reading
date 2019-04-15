let a = 1;
setTimeout(() => {
	a = 2;
});

let i = 0;

while (true) {
	console.log(a);
	i++;
	if (i === 10000000) {
		break;
	}
}
