"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequenceUtils_1 = require("./sequenceUtils");
// Генерация последовательности Фибоначчи до 100
console.log((0, sequenceUtils_1.generateFibonacci)(100)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// Генерация простых чисел до 50
console.log((0, sequenceUtils_1.generatePrimeNumbers)(50)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
