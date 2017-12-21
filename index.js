function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {

    if (array[i] === stopValue) {
      break;
    }

    array[i] = changeValue;

  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
        //Do nothing
    } else {
      array[i] = changeValue;
    }
  }
return array;
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    } else {
      return null;
    }
  }
}
