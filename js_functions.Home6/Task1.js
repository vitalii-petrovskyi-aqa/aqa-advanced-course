function square(a, b){
    let squareArea = a * b
    return squareArea 
}

console.log(square(5, 10))

// Function declaration
function square1(a, b){
    return a * b
}

console.log(square1(5, 10))

// Expretion 
const square2 = function (a, b){
    return a * b 
}

console.log(square2(5, 10))

// Arrow
const square3 = (a, b) => {
    return a * b
}

console.log(square3(5, 10))

// Arrow easy
const square4 = (a, b) => a * b

console.log(square4(5, 10))