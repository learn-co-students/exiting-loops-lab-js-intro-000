function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
  if (array[i] !== stopValue) {
   array[i] += (changeValue - array[i]);
  } else if (array[i] == stopValue) {
    break;
  }
}
return array;
}
function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == skipValue) {
      continue;
    } else {
      array[i] += (changeValue - array[i]);
    }
  }
  return array;
}
function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    } else {
      array[i] = null;
    }
  }
}
