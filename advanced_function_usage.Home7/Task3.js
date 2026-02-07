function divediNumber(numerator , denominator){
    if (typeof numerator !== 'number' || typeof denominator !== 'number'){
       throw new Error(`This input shuld contain only number`);
    } else if (denominator === 0) {
       throw new Error(`Denominator must be greater than 0`);
    } else return numerator/denominator;
}

try {
    console.log(divediNumber(0, 9))
} catch (error) {
    console.log(error);
} finally {
    console.log(`The work is finished`)
}