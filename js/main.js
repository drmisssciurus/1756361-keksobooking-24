function getRandomInteger (min, max) {
  if (max <= min) {
    return(`Максимальное ${max} число не может быть меньше или равно ${min}`);

  }
  return Math.floor(min + Math.random() * (max - min));
}

getRandomInteger(9,4);

function getRandomFloat (min, max, count) {
  if (max <= min) {
    return(`Максимальное ${max} число не может быть меньше или равно ${min}`);

  }
  return (min + Math.random() * (max - min)).toFixed(count);
}

getRandomFloat (2, 4, 9);

//const getRandomFloat = (min, max, count) => {
//   if (max <= min) {
//     alert(`Максимальное ${max} число не может быть меньше или равно ${min}`)
//     return
//   }
//   return (min + Math.random() * (max - min)).toFixed(count);
// }
