var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Функция для асинхронной обработки строки
const asyncProcessString = (str) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(str.toUpperCase());
        }, 1000); // Задержка в 1 секунду
    });
};
// Функция, которая обрабатывает массив строк параллельно
const processStringsInParallel = (strings) => __awaiter(this, void 0, void 0, function* () {
    const promises = strings.map(str => asyncProcessString(str));
    const results = yield Promise.all(promises);
    console.log(results);
});
// Пример использования
processStringsInParallel(["hello", "world", "async", "await"]);
