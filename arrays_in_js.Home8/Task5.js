const arrayMonth = ['March', 'Jan', 'Feb', 'Dec']
const arrayDay = ['Mon', 'Tue', 'Wen', 'Thu']

const concatenatedArray = arrayMonth.concat(arrayDay);
console.log(concatenatedArray)

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [10, 20, 30, 40, 50];

function combiningArrays(set1, set2) {
	let newArrays = set1.concat(set2);
	return newArrays;
}

console.log(combiningArrays(firstArray, secondArray));