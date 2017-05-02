function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }

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
  for (var i = 0; i < array.length; i++) {
    var filtered = findFn(array[i]);

    if (filtered) {
      return array[i]
    }
  }

  return null;
}
