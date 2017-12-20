function breakOut(array, changeValue, stopValue) {
  for (let n = 0; n < array.length; n++) {
    if (array[n] !== stopValue) {
      array[n] = changeValue;
    } else {break};
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let n = 0; n < array.length; n++) {
    if(array[n] !== skipValue) {
      array[n] = changeValue;
      continue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  for (let n = 0; n < array.length; n++) {
    if (findFn(array[n])) {
      return array[n];
      break;
    } else {
      continue;
    }
  } return null;
}
