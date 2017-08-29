function runThisWhenFileLoads() {
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
}

function runThisWhenFileLoads2() {
	var data = JSON.parse(this.responseText).breeds;
	console.log("breeds", data);

}

function didntWork() {
	console.log("what did you do?!?");
}

var myRequestForDogs = new XMLHttpRequest;
myRequestForDogs.addEventListener("load", runThisWhenFileLoads);
myRequestForDogs.addEventListener("error", didntWork);
myRequestForDogs.open("GET", "https://random-dogs-api.herokuapp.com/dogs/42");
myRequestForDogs.send();

var myRequestForDogBreeds = new XMLHttpRequest;
myRequestForDogBreeds.addEventListener("load", runThisWhenFileLoads2);
myRequestForDogBreeds.addEventListener("error", didntWork);
myRequestForDogBreeds.open("GET", "breeds.json");
myRequestForDogBreeds.send();