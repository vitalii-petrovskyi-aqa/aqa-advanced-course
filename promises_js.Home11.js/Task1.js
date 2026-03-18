// let planets = []
// for (let i = 1; i < 11; i++){
//   let data = await fetch(`https://swapi.dev/api/planets/${i}`)
//   let body = await data.json()
//   planets.push(body.name)
// }
// console.log(planets)

let promisesArray = [];
for (let i = 1; i < 11; i++) {
	promisesArray.push(
		fetch(`https://swapi.dev/api/planets/${i}`)
			.then((response) => response.json())
			.then((json) => json.name),
	);
}

const planetsName = await Promise.all(promisesArray);
console.log(planetsName);