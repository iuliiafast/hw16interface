"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = exports.capitalize = void 0;
// Функция для капитализации первой буквы строки
var capitalize = function (str) {
    if (!str)
        return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitalize = capitalize;
// Функция для переворота строки
var reverseString = function (str) {
    return str.split('').reverse().join('');
};
exports.reverseString = reverseString;
