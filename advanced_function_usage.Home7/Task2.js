function recursion(num) {
	console.log(num);
	if (num <= 0) {
		return;
	} else return recursion(num - 1);
}

function recursion2(num) {
	while (num >= 0) {
		console.log(num);
		num--;
	}
}

let num = 5;
recursion(num);
console.log('---');
recursion2(num);