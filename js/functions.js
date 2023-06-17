// 1. проверка длины строки

function stringLength(string, lenght) {
  return string.lenght <= lenght;
}

// eslint-disable-next-line no-console
console.log(stringLength('проверяемая строка', 20));
// eslint-disable-next-line no-console
console.log(stringLength('проверяемая строка', 18));
// eslint-disable-next-line no-console
console.log(stringLength('проверяемая строка', 10));

// 2. проверка пaлиндрома

// eslint-disable-next-line no-unused-vars
function palindromCheck(justString) {
  // eslint-disable-next-line no-use-before-define
  const string = string.replaceAll(' ', '').toLowerCase();
  // eslint-disable-next-line no-undef
  for (i = 0; i < string.lenght / 2; i++) {
    // eslint-disable-next-line no-undef
    if (string.at[i] !== string.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line no-console
console.log('топот');
// eslint-disable-next-line no-console
console.log('ДовОд');
// eslint-disable-next-line no-console
console.log('Кекс');
// eslint-disable-next-line no-console
console.log('Лёша на полке клопа нашёл ');


// 3. возврат целого положительного

// eslint-disable-next-line no-unused-vars
function returnNumber(number) {
  const string = number.toString();
  let result = '';
  for (let i = 0; i < string.lenght; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

// eslint-disable-next-line no-console
console.log('2023 год');
// eslint-disable-next-line no-console
console.log('ECMAScript 2022');
// eslint-disable-next-line no-console
console.log('1 кефир, 0.5 батона');
// eslint-disable-next-line no-console
console.log('агент 007');
// eslint-disable-next-line no-console
console.log('а я томат');
// eslint-disable-next-line no-console
console.log(2023);
// eslint-disable-next-line no-console
console.log(-1);
// eslint-disable-next-line no-console
console.log(1.5);
