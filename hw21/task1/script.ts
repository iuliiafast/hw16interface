abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

// Создаем массив типа Animal[]
const animals: Animal[] = [new Dog(), new Cat()];

// Вызываем метод makeSound для каждого элемента массива
animals.forEach(animal => animal.makeSound());
