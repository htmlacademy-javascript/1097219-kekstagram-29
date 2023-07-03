// создать массив из 25 сгенерированных объектов
// каждый объект массива — описание фотографии, опубликованной пользователем

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

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || min > max) {
    return NaN;
  }

  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AvatarAmount.MIN, AvatarAmount.MAX)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
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
const pictures = createPictures();

// eslint-disable-next-line no-console
console.log(pictures);
