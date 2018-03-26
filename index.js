function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == stopValue) {break};
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == skipValue) {continue};
    array[i] = changeValue;
  }
  return array
}

function findBy(array, findFn) {
  const map1 = array.map(findFn);
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'string') {return null}
    else if (array[i] !== 1) {return array[i]};
  }
}
