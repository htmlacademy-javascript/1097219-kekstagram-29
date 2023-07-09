// модуль создающий данные

import { createIdGenerator, getRandomInteger, getRandomItem } from './util.js';

const NAMES = [
  'Риолу',
  'Лукарио',
  'Сильвеон',
  'Зоруа',
  'Генгар',
  'Нойверн',
  'Шинкс',
];

const DESCRIPTIONS = [
  'Господь',
  'Помоги',
  'Переварить',
  'Жаваскрипт',
  'За два',
  'Месяца',
  'Аминь',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PICTURES_COUNT = 25;

const AvatarAmount = {
  MIN: 1,
  MAX: 6,
};

const CommentsAmount = {
  MIN: 0,
  MAX: 30,
};

const LikesAmount = {
  MIN: 15,
  MAX: 200,
};

const generateCommentId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AvatarAmount.MIN, AvatarAmount.MAX)}.svg`,
  message: getRandomItem(COMMENTS),
  name: getRandomItem(NAMES),
});

const createComments = (length) => Array.from({ length }, createComment);

const createPicture = (_, index) => {
  const idNumber = index + 1;

  return {
    id: idNumber,
    url: `photos/${idNumber}.jpg`,
    description: DESCRIPTIONS[index],
    likes: getRandomInteger(LikesAmount.MIN, LikesAmount.MAX),
    comments: createComments(getRandomInteger(CommentsAmount.MIN, CommentsAmount.MAX)),
  };
};

const createPictures = () => Array.from({ length: PICTURES_COUNT }, createPicture);

export { createPictures };
