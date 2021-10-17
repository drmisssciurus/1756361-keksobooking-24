export const getRandomInteger = (min, max) => {
  if (max <= min) {
    return(`Максимальное ${max} число не может быть меньше или равно ${min}`);

  }
  return Math.floor(min + Math.random() * (max - min));
};

export const getRandomFloat = (min, max) => {
  if (max <= min) {
    return(`Максимальное ${max} число не может быть меньше или равно ${min}`);
  }
  return (min + Math.random() * (max - min)).toFixed(5);
};
