function breakOut(array, changeValue, stopValue) {
  for (let n=0; n<array.length; n++) {
    if (array[n] === stopValue) {
      break;
    }
    array[n] = changeValue;
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let n=0; n<array.length; n++) {
    if (array[n] === skipValue) {
      continue;
    }
    array[n] = changeValue;
  }
  return array
}

function findBy(array, findFn) {
  for (let n=0; n<array.length; n++) {
    if (findFn(array[n])) {
      return array[n];
    }
  }
  return null;
}