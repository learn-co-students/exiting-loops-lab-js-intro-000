function breakOut(array, changeValue, stopValue) {
  var j = array.length;
  for (var i = 0; i < j; i++) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  var j = array.length;
  for (var i = 0; i < j; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  var j = array.length;
  for (var i = 0; i < j; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
}
