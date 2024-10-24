// Задание 1
type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Alex",
  email: "alex@example.com",
  permissions: ["read", "write", "delete"]
};

console.log(adminUser);

// Задание 2
interface Engine {
  type: string;
  horsepower: number;
}

interface Car {
  make: string;
  model: string;
  engine: Engine;
  year?: number; // Опциональное поле
}

const car: Car = {
  make: "Toyota",
  model: "Camry",
  engine: {
    type: "V6",
    horsepower: 301
  },
  year: 2020
};

function displayCarInfo(car: Car): void {
  const yearInfo = car.year ? `, Year: ${car.year}` : '';
  console.log(`Make: ${car.make}, Model: ${car.model}, Engine Type: ${car.engine.type}, Horsepower: ${car.engine.horsepower}${yearInfo}`);
}

displayCarInfo(car);

// Задание 3
interface Product {
  name: string;
  price: number;
}

function calculateDiscount(product: Product, discount: number): number {
  return product.price - (product.price * (discount / 100));
}

const product: Product = { name: "Laptop", price: 1000 };
const newPrice = calculateDiscount(product, 10);
console.log(`New Price: ${newPrice}`);

// Задание 4
interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "John", salary: 50000 },
  { name: "Jane", salary: 60000 },
  { name: "Doe", salary: 55000 }
];

function getSalaries(employees: Employee[]): number[] {
  return employees.map(employee => employee.salary);
}

const salaries = getSalaries(employees);
console.log(salaries);

// Задание 5
interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: "Alice",
  lastName: "Smith",
  grade: 90
};

function displayStudentInfo(student: Student): void {
  console.log(`Student: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
}

displayStudentInfo(student);

// Задание 6
interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => {
  return str1 + str2;
};

const combinedString = concatStrings("Hello, ", "world!");
console.log(combinedString);
