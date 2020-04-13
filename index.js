function breakOut(array, changeValue, stopValue) {
  let i = 0;
  while (i < array.length -1) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
      i++;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  let i = 0;
  while (i < array.length) {
    if (array[i] === skipValue) {
      i++
      continue
    } else {
      array[i] = changeValue;
      i++
    }
  }
  return array;
}

function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}
