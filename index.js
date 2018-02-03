function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] === skipValue) {
      continue;
    } else {
      array[j] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn) {
  //let valueIs = findFn();
  for (let k = 0; k < array.length; k++) {
    //let valueIs = findFn(array[k])
    if (findFn(array[k])) {
      return array[k];
    }
  }
  return null;
}
