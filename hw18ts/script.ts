// Задание 1
function greetUser(name: string): void {
  console.log(`Привет, ${name}!`);
}

// Задание 2
interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
}

// Задание 3
function squareNumber(num: number): number {
  return num * num;
}

// Задание 4
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Задание 5
interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

// Задание 6
function logMessage(message: string): void {
  console.log(message);
}

// Примеры использования
greetUser('Алексей');
const person: Person = { name: 'Мария', age: 25, city: 'Москва' };
printPersonInfo(person);
console.log(squareNumber(4));
console.log(isEven(4));
const student: Student = { name: 'Сергей', grade: 5 };
printStudentInfo(student);
logMessage('Это сообщение для логирования.');
