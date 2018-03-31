var breakOut = function(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }

    array[i] = changeValue;
  }

  return array;
};

var keepGoing = function(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }

    array[i] = changeValue;
  }

  return array;
};

var findBy = function(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if ( findFn(array[i]) ) {
      return array[i];
    }
  }
};
