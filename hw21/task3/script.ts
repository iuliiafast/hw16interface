abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing Machine is now ON.");
  }

  turnOff(): void {
    console.log("Washing Machine is now OFF.");
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator is now ON.");
  }

  turnOff(): void {
    console.log("Refrigerator is now OFF.");
  }
}

// Создаем массив типа Appliance[]
const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

// Вызываем методы turnOn() и turnOff() для каждого элемента массива
appliances.forEach(appliance => {
  appliance.turnOn();
  appliance.turnOff();
});
