var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Функция, которая возвращает промис, завершающийся через указанное количество миллисекунд
const delayTask = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Промис завершен через ${ms}мс`);
        }, ms);
    });
};
// Функция для выполнения всех промисов параллельно
const runDynamicPromises = (numbers) => __awaiter(this, void 0, void 0, function* () {
    const promises = numbers.map(num => delayTask(num));
    const results = yield Promise.all(promises);
    console.log(results);
});
// Пример использования
runDynamicPromises([1000, 500, 2000, 1500]);
