//Задание 1
const sumEvenNumbers = (numbers: number[]): number =>
  numbers.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);
// Testing sumEvenNumbers
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(numbers)); // Output should be 12 (2 + 4 + 6)

//Задание 2
interface StringToBooleanFunction { (str: string): boolean }
const isEmptyString: StringToBooleanFunction = (str: string): boolean => str === "";
// Testing isEmptyString
console.log(isEmptyString(""));      // Output: true
console.log(isEmptyString("Hello")); // Output: false

//Задание 3
type CompareStrings = (str1: string, str2: string) => boolean;
const areStringsEqual: CompareStrings = (str1: string, str2: string): boolean => str1 === str2;
// Testing areStringsEqual
console.log(areStringsEqual("apple", "apple")); // Output: true
console.log(areStringsEqual("apple", "orange")); // Output: false

//Задание 4
const getLastElement = <T>(arr: T[]): T => arr[arr.length - 1];
// Testing getLastElement with numbers
const numArr = [1, 2, 3, 4];
console.log(getLastElement(numArr)); // Output: 4

// Testing getLastElement with strings
const strArr = ["a", "b", "c"];
console.log(getLastElement(strArr)); // Output: "c"

//Задание 5
const makeTriple = <T>(a: T, b: T, c: T): T[] => [a, b, c];
// Testing makeTriple with numbers
console.log(makeTriple(1, 2, 3)); // Output: [1, 2, 3]

// Testing makeTriple with strings
console.log(makeTriple("a", "b", "c")); // Output: ["a", "b", "c"]

