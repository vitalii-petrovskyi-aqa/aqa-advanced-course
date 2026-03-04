const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
let numbersSort = [...numbersList];

numbersList.sort((a, b) => a-b);

console.log(numbersSort);
console.log(numbersList);

function copySort(numbers) {
	let clone = numbers.slice();
	clone.sort((a, b) => a - b);
	return `numbers: ${numbers}\nclone: ${clone}`;
}

console.log(copySort(numbersList));


const numbersList2 = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedCopy = [...numbersList2].sort((a, b) => a - b);

console.log("original:", numbersList2);
console.log("sorted copy:", sortedCopy);

function getSortedCopy(arr) {
  return [...arr].sort((a, b) => a - b);
}

console.log("from function:", getSortedCopy(numbersList2));

const sortedNumbers = numbersList.toSorted((a, b) => a - b)

console.log (sortedNumbers)