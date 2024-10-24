//Задание 1
var sumEvenNumbers = function (numbers) {
    return numbers.filter(function (n) { return n % 2 === 0; }).reduce(function (sum, n) { return sum + n; }, 0);
};
// Testing sumEvenNumbers
var numbers = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(numbers)); // Output should be 12 (2 + 4 + 6)
var isEmptyString = function (str) { return str === ""; };
// Testing isEmptyString
console.log(isEmptyString("")); // Output: true
console.log(isEmptyString("Hello")); // Output: false
var areStringsEqual = function (str1, str2) { return str1 === str2; };
// Testing areStringsEqual
console.log(areStringsEqual("apple", "apple")); // Output: true
console.log(areStringsEqual("apple", "orange")); // Output: false
//Задание 4
var getLastElement = function (arr) { return arr[arr.length - 1]; };
// Testing getLastElement with numbers
var numArr = [1, 2, 3, 4];
console.log(getLastElement(numArr)); // Output: 4
// Testing getLastElement with strings
var strArr = ["a", "b", "c"];
console.log(getLastElement(strArr)); // Output: "c"
//Задание 5
var makeTriple = function (a, b, c) { return [a, b, c]; };
// Testing makeTriple with numbers
console.log(makeTriple(1, 2, 3)); // Output: [1, 2, 3]
// Testing makeTriple with strings
console.log(makeTriple("a", "b", "c")); // Output: ["a", "b", "c"]
