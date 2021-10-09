function getRandomInteger (min, max) {
  if (max <= min) {
    return(`Максимальное ${max} число не может быть меньше или равно ${min}`);

  }
  return Math.floor(min + Math.random() * (max - min));
}

// const getRandomInteger = array[Math.floor(Math.random() * array.length)];

getRandomInteger(9,4);



const getRandomFloat = (min, max) => {
  if (max <= min) {
    alert(`Максимальное ${max} число не может быть меньше или равно ${min}`)
    return;
  }
  return (min + Math.random() * (max - min)).toFixed(5);
};


const arrayOfAvatar = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
];

const arrayOfType = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const arrayOfCheckin = [
  '12:00',
  '13:00',
  '14:00',
];

const arrayOfCheckout = [
  '12:00',
  '13:00',
  '14:00',
];

const arrayOfFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const arrayOfPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const MIN_PRICE = 1;
const MAX_PRICE = 99999999;

const MIN_ROOMS = 1;
const MAX_ROOMS = 6;

const MIN_QUESTS = 1;
const MAX_QUESTS = 12;

const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;

const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;

const NUMBER_OF_AVATARS_MIN = 1;
const NUMBER_OF_AVATARS_MAX = 10;

const SIMILAR_AUTHOR_COUNT = 10;

const createAuthor= () => {
  const author = {
    avatar: `img/avatars/user0${getRandomInteger(
      NUMBER_OF_AVATARS_MIN,
      NUMBER_OF_AVATARS_MAX)}.png`,
  }
  return author;
};

const createLocation = () => {
  const location = {
    lat: getRandomFloat(MIN_LAT, MAX_LAT),
    lng: getRandomFloat(MIN_LNG, MAX_LNG),
  };
  return location;
};

const createNearestPlace = () => {
  const geoLocation = createLocation();

  return {
    author: createAuthor(),
    offer: {
      title: 'Посмотрите на это предложение! Возможно вам понравится!',
      adress: `${geoLocation.lat}, ${geoLocation.lng}`,
      price: getRandomInteger(MIN_PRICE, MAX_PRICE),
      type: arrayOfType[getRandomInteger(0,  arrayOfType.length - 1)],
      rooms: getRandomInteger(MIN_ROOMS, MAX_ROOMS),
      quest: getRandomInteger(MIN_QUESTS, MAX_QUESTS),
      checkin: arrayOfCheckin[getRandomInteger(0,  arrayOfCheckin.length - 1)],
      checkout: arrayOfCheckout[getRandomInteger(0,  arrayOfCheckout.length - 1)],
      features: arrayOfFeatures.slice(getRandomInteger(0,  arrayOfFeatures.length - 1)),
      description: 'Такой жил-площади позавидует любой кот! Сушеная рыба вместо штор!',
      photos: arrayOfPhotos.slice(getRandomInteger(0, arrayOfPhotos.length - 1)),
    },
    location: createLocation(),
  };
};

const similarAuthor = Array.from({length: SIMILAR_AUTHOR_COUNT}, createNearestPlace);

console.log(similarAuthor);
