const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

function numberCalculation(array) {
	let positiveCount = [];
	let negativeCount = [];
	let zeroCount = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 0) {
			positiveCount.push(array[i]);
		} else if (array[i] < 0) {
			negativeCount.push(array[i]);
		} else if (array[i] === 0) {
			zeroCount.push(array[i]);
		}
	}
	console.log(`Кількість позитивних чисел: ${positiveCount.length}`);
	console.log(`Кількість негативних чисел: ${negativeCount.length}`);
	console.log(`Кількість нульових чисел: ${zeroCount.length}`);
}

numberCalculation(numbers);