function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    if (ele !== stopValue) {
      array[i] = changeValue;
    } else {
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    if (ele === skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    if (findFn(ele) == true) {
      return ele;
    }
  }
  return null;
}
