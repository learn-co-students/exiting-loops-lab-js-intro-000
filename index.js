function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] != stopValue) {
      array[i] = changeValue;
      continue;
    } else {
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] != skipValue) {
      array[i] = changeValue;
      continue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i]) == true) {
      return array[i];
    }
  }
  return null;
}
