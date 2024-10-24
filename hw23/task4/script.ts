// Функция, которая возвращает промис, завершающийся через указанное количество миллисекунд
const delayTask = (ms: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Промис завершен через ${ms}мс`);
    }, ms);
  });
};

// Функция для выполнения всех промисов параллельно
const runDynamicPromises = async (numbers: number[]) => {
  const promises = numbers.map(num => delayTask(num));
  const results = await Promise.all(promises);
  console.log(results);
};

// Пример использования
runDynamicPromises([1000, 500, 2000, 1500]);
