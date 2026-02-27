const spent = [10, 20, 30, 40, 50];
const sum = spent.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum)

const array =[1, 2, 3, 4, 5];

function arraySum(arrayNumbers) {
    return arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(arraySum(array))

const money= [100, 200, 300, 400, 500] 

let accumulator = 0;

for (let i = 0; i < money.length; i++) {
    accumulator = accumulator + money[i];
}

console.log(accumulator);