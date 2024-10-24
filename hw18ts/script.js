// Задание 1
function greetUser(name) {
    console.log("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "!"));
}
function printPersonInfo(person) {
    console.log("\u0418\u043C\u044F: ".concat(person.name, ", \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(person.age, ", \u0413\u043E\u0440\u043E\u0434: ").concat(person.city));
}
// Задание 3
function squareNumber(num) {
    return num * num;
}
// Задание 4
function isEven(num) {
    return num % 2 === 0;
}
function printStudentInfo(student) {
    console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442: ".concat(student.name, ", \u041E\u0446\u0435\u043D\u043A\u0430: ").concat(student.grade));
}
// Задание 6
function logMessage(message) {
    console.log(message);
}
// Примеры использования
greetUser('Алексей');
var person = { name: 'Мария', age: 25, city: 'Москва' };
printPersonInfo(person);
console.log(squareNumber(4));
console.log(isEven(4));
var student = { name: 'Сергей', grade: 5 };
printStudentInfo(student);
logMessage('Это сообщение для логирования.');
