import {makeSimilarAdvertisements} from './generationcard.js';

const userMap = document.querySelector('.map');

const fillFeatures = (featuresElement, featuresArray) => {
  featuresElement.innerHTML = '';

  featuresArray.forEach((item) => {
    const liElement = document.createElement('li');

    liElement.classList.add('popup__feature' , `popup__feature—-${item}` );
    featuresElement.appendChild(liElement);
  });
  return fillFeatures;
};

const fillPhotos = (photosElement, photosArray) => {
  photosElement.innerHTML = '';

  photosArray.forEach((item) => {
    const imgElement = document.createElement('img');

    imgElement.src=`${item}`;
    photosElement.appendChild(imgElement);
  });
};

const templateAdvertisements = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createAdvertisiments = makeSimilarAdvertisements();

const similarListFragment = document.createDocumentFragment();

createAdvertisiments.forEach((item) => {
  const cardElement = templateAdvertisements.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = item.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = item.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${item.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = item.offer.type;
  cardElement.querySelector('.popup__text--capacity').textContent = `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${item.offer.checkin} , выезд до  ${item.offer.checkout}`;
  fillFeatures(cardElement.querySelector('.popup__features'), item.offer.features);
  cardElement.querySelector('.popup__description').textContent = item.offer.description;
  fillPhotos(cardElement.querySelector('.popup__photos'), item.offer.photos);
  similarListFragment.appendChild(cardElement);
});

userMap.appendChild(similarListFragment.firstChild);

