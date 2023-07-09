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

// 4. функция возвращает true - встреча не выходит за рамки рабочего дня, false - если выходит

const isMeetingWithinWorkingHours = (startTime, endTime, meetingStart, meetingDuration) => {
  const [startHours, startMinutes] = startTime.split(':').map(Number);
  const startInMinutes = startHours * 60 + startMinutes;

  const [endHours, endMinutes] = endTime.split(':').map(Number);
  const endInMinutes = endHours * 60 + endMinutes;

  const [meetingStartHours, meetingStartMinutes] = meetingStart.split(':').map(Number);
  const meetingStartInMinutes = meetingStartHours * 60 + meetingStartMinutes;

  const meetingEndInMinutes = meetingStartInMinutes + meetingDuration;

  return meetingStartInMinutes >= startInMinutes && meetingEndInMinutes <= endInMinutes;
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

console.log(isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90));
console.log(isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120));
console.log(isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90));
console.log(isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90));
console.log(isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900));
