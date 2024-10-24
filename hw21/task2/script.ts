abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  color: string;

  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

// Создаем объекты ColoredCircle и ColoredRectangle
const circle = new ColoredCircle(5, "Red");
const rectangle = new ColoredRectangle(4, 6, "Blue");

// Выводим площадь и цвет для каждого объекта
console.log(`Circle area: ${circle.calculateArea()}, Color: ${circle.color}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}, Color: ${rectangle.color}`);
