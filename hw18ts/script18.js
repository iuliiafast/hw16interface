var adminUser = {
    name: "Alex",
    email: "alex@example.com",
    permissions: ["read", "write", "delete"]
};
console.log(adminUser);
var car = {
    make: "Toyota",
    model: "Camry",
    engine: {
        type: "V6",
        horsepower: 301
    },
    year: 2020
};
function displayCarInfo(car) {
    var yearInfo = car.year ? ", Year: ".concat(car.year) : '';
    console.log("Make: ".concat(car.make, ", Model: ").concat(car.model, ", Engine Type: ").concat(car.engine.type, ", Horsepower: ").concat(car.engine.horsepower).concat(yearInfo));
}
displayCarInfo(car);
function calculateDiscount(product, discount) {
    return product.price - (product.price * (discount / 100));
}
var product = { name: "Laptop", price: 1000 };
var newPrice = calculateDiscount(product, 10);
console.log("New Price: ".concat(newPrice));
var employees = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Doe", salary: 55000 }
];
function getSalaries(employees) {
    return employees.map(function (employee) { return employee.salary; });
}
var salaries = getSalaries(employees);
console.log(salaries);
var student = {
    firstName: "Alice",
    lastName: "Smith",
    grade: 90
};
function displayStudentInfo(student) {
    console.log("Student: ".concat(student.firstName, " ").concat(student.lastName, ", Grade: ").concat(student.grade));
}
displayStudentInfo(student);
var concatStrings = function (str1, str2) {
    return str1 + str2;
};
var combinedString = concatStrings("Hello, ", "world!");
console.log(combinedString);
