var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Функции, возвращающие промисы
const successfulPromise = (name, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Задача ${name} завершена успешно`);
        }, delay);
    });
};
const failingPromise = (name, delay) => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Задача ${name} завершилась с ошибкой`));
        }, delay);
    });
};
// Функция, запускающая промисы параллельно
const runPromisesWithErrorHandling = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const results = yield Promise.all([
            successfulPromise("A", 1000),
            failingPromise("B", 2000), // Этот промис завершится с ошибкой
            successfulPromise("C", 1500)
        ]);
        console.log(results);
    }
    catch (error) {
        console.error(`Ошибка: ${error.message}`);
    }
});
runPromisesWithErrorHandling();
