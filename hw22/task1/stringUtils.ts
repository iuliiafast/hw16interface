// Функция для капитализации первой буквы строки
export const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Функция для переворота строки
export const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
};
