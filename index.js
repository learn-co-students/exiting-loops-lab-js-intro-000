function breakOut(array, changeValue, stopValue) {
var i = 0;

  for (i = 0; i < array.length; i++) {
    if(array[i] === stopValue) {
      break;
    }
    else {
      array[i] = changeValue;
    }
  }

  return array;
}

function keepGoing(array, changeValue, skipValue) {
var i = 0;

  for (i = 0; i < array.length; i++) {
    if(array[i] === skipValue) {
      continue;
    }
    else {
      array[i] = changeValue;
    }
  }

  return array;
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
      if (findFn(array[i])) {
        return array[i]
      }
    }
}
