"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringUtils_1 = require("./stringUtils");
var testString = "hello world";
// Тестируем функции
console.log((0, stringUtils_1.capitalize)(testString)); // Output: "Hello world"
console.log((0, stringUtils_1.reverseString)(testString)); // Output: "dlrow olleh"
