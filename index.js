function breakOut(array, changeValue, stopValue) {
  var i = 0
  while (i < array.length){
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
    i++;
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
      if (array[i] === skipValue) {
        continue;
      }
      array[i] = changeValue;
  }
  return array
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])){
      return array[i]
    }
  }
}
