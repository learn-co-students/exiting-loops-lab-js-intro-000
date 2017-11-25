//changes every element in `array` to `changeValue` until it reachs `stopValue`
function breakOut(array, changeValue, stopValue) {
  for (var index in array) {
    if (array[index] === stopValue) {
      break;
    } else {
      array[index] = changeValue;
    }
  }
  return array;
}

//changes every element in `array` to `changeValue` unless the element === `skipValue`
function keepGoing(array, changeValue, skipValue) {
  for (var index in array) {
    if (array[index] === skipValue) {
      continue;
    } else {
      array[index] = changeValue;
    }
  }
  return array;
}

//finds the a value that satisfies `findFn`
//returns `null` if no match found
function findBy(array, findFn) {
  for (var index in array) {
    if (findFn(array[index])) {
      return array[index];
    }
  }
  return null;
}
