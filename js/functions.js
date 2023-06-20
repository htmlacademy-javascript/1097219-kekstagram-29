// 1. проверка длины строки

const checkLengthLimit = ({ length }, maxLength) => length <= maxLength;

// 2. проверка пaлиндрома

const checkPalindrom = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
  }
  return true;
};

// 3. возврат целого положительного

const returnNumber = (number) => {
  const string = number.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
};

/* eslint-disable no-console*/

console.log(checkLengthLimit('проверяемая строка', 20));
console.log(checkLengthLimit('проверяемая строка', 18));
console.log(checkLengthLimit('проверяемая строка', 10));

console.log(checkPalindrom('топот'));
console.log(checkPalindrom('ДовОд'));
console.log(checkPalindrom('Кекс'));
console.log(checkPalindrom('Лёша на полке клопа нашёл '));

console.log(returnNumber('2023 год'));
console.log(returnNumber('ECMAScript 2022'));
console.log(returnNumber('1 кефир, 0.5 батона'));
console.log(returnNumber('агент 007'));
console.log(returnNumber('а я томат'));
console.log(returnNumber(2023));
console.log(returnNumber(-1));
console.log(returnNumber(1.5));
