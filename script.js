class Animal {
	constructor(species) {
		this._species = species; // Store species as a private variable
	}
	
	get species() {
		return this._species; // Getter for species
	}
	
	makeSound() {
		console.log(`The ${this._species} makes a sound`);
	}
}

class Cat extends Animal {
	purr() {
		console.log("purr");
	}
}

class Dog extends Animal {
	bark() {
		console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
