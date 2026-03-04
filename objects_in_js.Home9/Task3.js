const car = {
    brand: 'Audi',
    model: 'Q5',
    year: 2017
};

const car1 = {
    brand: 'BMW',
    model: 'X5',
    year: 2019
    
};
const car2= {...car, ...car1};

console.log(car2)