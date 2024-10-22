class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }

  sound(): void {
    console.log("The dog barks");
  }
}

// Пример использования
const genericAnimal = new Animal("Lion", "Panthera leo");
genericAnimal.sound(); // "The animal makes a sound"

const dog = new Dog("Buddy", "Canis familiaris", "Golden Retriever");
dog.sound(); // "The dog barks"
