"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePrimeNumbers = exports.generateFibonacci = void 0;
// Генерация последовательности Фибоначчи до указанного числа
var generateFibonacci = function (limit) {
    var fibSequence = [0, 1];
    var nextNumber = fibSequence[0] + fibSequence[1];
    while (nextNumber <= limit) {
        fibSequence.push(nextNumber);
        var len = fibSequence.length;
        nextNumber = fibSequence[len - 1] + fibSequence[len - 2];
    }
    return fibSequence;
};
exports.generateFibonacci = generateFibonacci;
// Генерация простых чисел до указанного числа
var generatePrimeNumbers = function (limit) {
    var primes = [];
    for (var i = 2; i <= limit; i++) {
        var isPrime = true;
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
};
exports.generatePrimeNumbers = generatePrimeNumbers;
