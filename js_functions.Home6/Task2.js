const adultUser = (ageUser) => ageUser >= 18 ? true : false

console.log(adultUser(15))
console.log(adultUser(25))

const isAdult = (age) => {
	if (age >= 18) {
		return true;
	}
	return false;
};

console.log(isAdult(15));
console.log(isAdult(25));