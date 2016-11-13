function breakOut(array, changeValue, stopValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue;
    }
  else {
    break;
    }
  }
   return array;//note this placement of the return, outside of the outer loop
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue;
    }
    else {
      continue;
    }
  }
  return array;
}

/*function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== findFn(array)) {
      continue;
      }
      else {
        return findFn(array);
      }
    }
    if (findFn(array) === undefined);
    return null;
}
*/

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
    else {
      continue;
    }
  }
  return null;
}
