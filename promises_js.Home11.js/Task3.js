// let getFilms3 = await fetch(`https://swapi.dev/api/films/3/`);
// let getDataFilm3 = await getFilms3.json();

// let getPlanetsUrls = getDataFilm3.planets;

// let result = [];
// for (let getPlanetsUrl of getPlanetsUrls) {
// 	let resPlanet = await fetch(getPlanetsUrl);
// 	let getDataPlanet = await resPlanet.json();
// 	let getResidentUrls = getDataPlanet.residents;
// 	let planetObj = {
// 		planetName: getDataPlanet.name,
// 		residents: [],
// 	};

// 	for (let getResidentUrl of getResidentUrls) {
// 		let getResResident = await fetch(getResidentUrl);
// 		let getDataResident = await getResResident.json();
// 		let getNameResident = await getDataResident.name;
// 		planetObj.residents.push(getNameResident);
// 	}

// 	result.push(planetObj);
// }

// console.log(result);

// Павло Королишин
const filmResponse = await fetch('https://swapi.dev/api/films/3/')
const filmData = await filmResponse.json()
const planets = filmData.planets

planets.map(async (planet) => {
    const planetResponse = await fetch(planet)
    const planetData = await planetResponse.json()
    const residents = planetData.residents
    const residentsNames = []

    residents.map(async (resident) => {
        const residentResponse = await fetch(resident)
        const residentData = await residentResponse.json()
        residentsNames.push(residentData.name)


        if (residentsNames.length === planetData.residents.length) {
            console.log({
                planetName: planetData.name,
                residents: residentsNames
            })
        }
    })
})