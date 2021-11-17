import {makeSimilarAdvertisements} from './generationcard.js';

const map = L.map('map-canvas')
  .on('load', () => {
  })
  .setView({
    lat: 35.6895,
    lng:  139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng:  139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const obgPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [0, 0],
});

mainPinMarker.addTo(map);

// mainPinMarker.on('moveend', (evt) => {
//   const markerPosition = (evt.target.getLatLng());
// });

const points = makeSimilarAdvertisements();

const makePoints = (point) => {
  point.forEach((item) => {
    const obgPinMarker = L.marker(
      {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      {
        draggable: true,
        icon: obgPinIcon,
      },
    );

    obgPinMarker.addTo(map);
  });
};

makePoints(points);
