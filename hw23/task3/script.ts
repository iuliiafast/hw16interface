// Функции, возвращающие промисы
const successfulPromise = (name: string, delay: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Задача ${name} завершена успешно`);
    }, delay);
  });
};

const failingPromise = (name: string, delay: number): Promise<string> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Задача ${name} завершилась с ошибкой`));
    }, delay);
  });
};

// Функция, запускающая промисы параллельно
const runPromisesWithErrorHandling = async () => {
  try {
    const results = await Promise.all([
      successfulPromise("A", 1000),
      failingPromise("B", 2000),  // Этот промис завершится с ошибкой
      successfulPromise("C", 1500)
    ]);
    console.log(results);
  } catch (error) {
    console.error(`Ошибка: ${(error as Error).message}`);
  }
};

runPromisesWithErrorHandling();
