// Генерация последовательности Фибоначчи до указанного числа
export const generateFibonacci = (limit: number): number[] => {
  const fibSequence = [0, 1];
  let nextNumber = fibSequence[0] + fibSequence[1];

  while (nextNumber <= limit) {
    fibSequence.push(nextNumber);
    const len = fibSequence.length;
    nextNumber = fibSequence[len - 1] + fibSequence[len - 2];
  }

  return fibSequence;
};

// Генерация простых чисел до указанного числа
export const generatePrimeNumbers = (limit: number): number[] => {
  const primes = [];

  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
};
