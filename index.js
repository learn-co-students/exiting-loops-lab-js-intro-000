function breakOut(array, changeValue, stopValue) {
  for (var i = 0; array[i] !== stopValue; i++) {
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  for (var i = 0; 1 < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
