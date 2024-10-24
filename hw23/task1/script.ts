// Функция, возвращающая промис с задержкой
const asyncTask = (name: string, delay: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Задача ${name} завершена через ${delay}мс`);
    }, delay);
  });
};

// Функция, выполняющая задачи последовательно
const runSequentially = async () => {
  const result1 = await asyncTask("A", 1000);
  console.log(result1);

  const result2 = await asyncTask("B", 2000);
  console.log(result2);

  const result3 = await asyncTask("C", 1500);
  console.log(result3);
};

runSequentially();