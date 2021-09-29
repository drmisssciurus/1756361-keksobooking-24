function getRandomInteger (min, max) {
  if (max <= min) {
    alert(`Максимальное ${max} число не может быть меньше или равно ${min}`)
    return
  }
  return Math.floor(min + Math.random() * (max - min));
}

console.log(getRandomInteger(3,3));

function getRandomFloat (min, max, count) {
  if (max <= min) {
    alert(`Максимальное ${max} число не может быть меньше или равно ${min}`)
    return
  }
  return (min + Math.random() * (max - min)).toFixed(count);
}

console.log(getRandomFloat (2, 4, 9));

//const getRandomFloat = (min, max, count) => {
//   if (max <= min) {
//     alert(`Максимальное ${max} число не может быть меньше или равно ${min}`)
//     return
//   }
//   return (min + Math.random() * (max - min)).toFixed(count);
// }

console.log(getRandomFloat (2, 4, 9));
