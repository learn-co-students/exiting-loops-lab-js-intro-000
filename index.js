// loops breakOut(array, changeValue, stopValue) changes every element in `array` to `changeValue` until it reachs `stopValue`
function breakOut(array, changeValue, stopValue) {
  for(let i = 0, l = array.length; i < l; i++) {
    if(array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

// loops keepGoing(array, changeValue, skipValue) changes every element in `array` to `changeValue` unless the element === `skipValue`
function keepGoing(array, changeValue, skipValue) {
  for(let i = 0, l = array.length; i < l; i++) {
    if(array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

// loops findBy(array, findFn) finds the a value that satisfies `findFn`
// loops findBy(array, findFn) returns `null` if no match found
function findBy(array, findFn) {
  for(let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
