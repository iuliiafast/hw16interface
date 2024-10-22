class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

// Пример использования
const vehicle = new Vehicle("Toyota", "Corolla");
console.log(vehicle.make, vehicle.model); // "Toyota", "Corolla"

const motorcycle = new Motorcycle("Harley-Davidson", "Sportster", "Cruiser");
console.log(motorcycle.make, motorcycle.model, motorcycle.type); // "Harley-Davidson", "Sportster", "Cruiser"
