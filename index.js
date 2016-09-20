function breakOut(array, changeValue, stopValue) {
  var result = [...array];
  for (var i=0; i<array.length; i++) {
    if (array[i]===stopValue) break;
    result[i] = changeValue;
  }
  return result;
}

function keepGoing(array, changeValue, skipValue) {
  var result = [...array];
  for (var i=0; i<array.length; i++) {
    if (array[i]===skipValue) continue;
    result[i] = changeValue;
  }
  return result;
}

function findBy(array, findFn) {
  for (var i=0; i<array.length; i++) {
    if (findFn(array[i])) return array[i];
  }
  return null;
}
