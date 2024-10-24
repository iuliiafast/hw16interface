// Функция для асинхронной обработки строки
const asyncProcessString = (str: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.toUpperCase());
    }, 1000); // Задержка в 1 секунду
  });
};

// Функция, которая обрабатывает массив строк параллельно
const processStringsInParallel = async (strings: string[]) => {
  const promises = strings.map(str => asyncProcessString(str));
  const results = await Promise.all(promises);
  console.log(results);
};

// Пример использования
processStringsInParallel(["hello", "world", "async", "await"]);
