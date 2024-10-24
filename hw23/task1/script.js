var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Функция, возвращающая промис с задержкой
const asyncTask = (name, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Задача ${name} завершена через ${delay}мс`);
        }, delay);
    });
};
// Функция, выполняющая задачи последовательно
const runSequentially = () => __awaiter(this, void 0, void 0, function* () {
    const result1 = yield asyncTask("A", 1000);
    console.log(result1);
    const result2 = yield asyncTask("B", 2000);
    console.log(result2);
    const result3 = yield asyncTask("C", 1500);
    console.log(result3);
});
runSequentially();
