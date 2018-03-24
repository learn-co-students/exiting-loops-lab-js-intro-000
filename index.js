function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] != stopValue) {
      array[i] = changeValue;
    } else if (array[i] === stopValue) {
      return array;
      break;
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== skipValue) {
      array[i] = changeValue;
      continue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i += 1) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
}
