// Step 2
function runThisWhenFileLoads() {
	var dogsData = JSON.parse(this.responseText).dogs;
	// console.log("dogs", dogsData);
	getBreeds(dogsData);
}

function didntWork() {
	console.log("what did you do?!?");
}
//Step 1
var myRequestForDogs = new XMLHttpRequest;
myRequestForDogs.addEventListener("load", runThisWhenFileLoads);
myRequestForDogs.addEventListener("error", didntWork);
myRequestForDogs.open("GET", "https://random-dogs-api.herokuapp.com/dogs/42");
myRequestForDogs.send();

// Step 3
function getBreeds(dogz){
	// console.log("dogs array inside getBreeds", dogz);
	var myRequestForDogBreeds = new XMLHttpRequest;
	myRequestForDogBreeds.addEventListener("load", runThisWhenFileLoads2);
	myRequestForDogBreeds.addEventListener("error", didntWork);
	myRequestForDogBreeds.open("GET", "breeds.json");
	myRequestForDogBreeds.send();

	// step 4
	function runThisWhenFileLoads2() {
		var breedsData = JSON.parse(this.responseText).breeds;
		// console.log("breeds", breedsData);
		// console.log("dogs next to breeds", dogz);
		//step 5
		combinedArray(dogz, breedsData);
	}

}
//step 6, congrats we got both arrays in one place
function combinedArray(dogsArray, breedsArray) {

	// loop through dogs and look at breed_id
	dogsArray.forEach(function(dog){

		var currentBreedId = dog["breed-id"];

		// Step 7, looping through both ...
		breedsArray.forEach(function(breed){
			if (currentBreedId === breed.id){

			// Step 8 ... to add new key value pairs from breeds
			dog["dogBreed"] = breed.name;
			dog["basePrice"] = breed["base-price"];
			dog["description"] = breed.description;
			dog["finalPrice"] = dog.basePrice + dog["add-on-price"]
			}
		})
	});
			console.log("all dog", dogsArray);
			// Step 9
			domString(dogsArray);
}

// function domString(dogs) {
// 	var finishedDomString = "";
// 	for (var i = 0; i < dogs.length; i++){
// 		finishedDomString += 	`<div class="dog">`;
// 		finishedDomString += 		`<h1>${dogs[i].name}</h1>`;
// 		finishedDomString += 		`<h5>breed: ${dogs[i].categoryName}</h5>`;
// 		finishedDomString += 		`<h5>description: ${dogs[i].description}</h5>`;
// 		finishedDomString += 		`<h3>&#36;${dogs[i].finalPrice}</h3>`;
// 		finishedDomString +=  `</div>`
// 	}
// 	writeToDom(finishedDomString);
// }
// function writeToDom(finishedDomString) {
// 	document.body.innerHTML += finishedDomString;
// }