let promisesArray = [];
promisesArray.push(
	fetch(`https://swapi.dev/api/people/14`)
		.then((response) => response.json())
		.then((json) => json.starships)
		.then((starships) => {
			let starshipPromises = starships.map((url) => fetch(url).then((response) => response.json()));
			return Promise.all(starshipPromises);
		})
		.then((starshipData) => starshipData.map((data) => data.name)),
);

Promise.all(promisesArray).then((starshipNames) => {
	console.log(starshipNames.flat());
});

let planets = [];
let data = await fetch(`https://swapi.dev/api/people/14`);
let body = await data.json();
for (let url of body.starships) {
	let resStarships = await fetch(url);
	let starshipsData = await resStarships.json();
	planets.push(starshipsData.name);
}