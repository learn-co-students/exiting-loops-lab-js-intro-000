const breakOut = (array, changeValue, stopValue) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
};

const keepGoing = (array, changeValue, skipValue) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
};

const findBy = (array, findFn) => {
  for (let i = 0; i < array.length; i += 1) { 
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}